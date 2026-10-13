<?php
declare(strict_types=1);

/**
 * Standard W3C & RESTful API Architecture
 * XX_SERVER_MODULE/BACKEND Front Controller & Micro-Framework
 * Supports Laravel Sanctum Bearer Token standards, FormRequest validations,
 * Relational SQLite/MySQL models, and strict JSON status codes (200, 401, 422).
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Accept');
header('Content-Type: application/json; charset=UTF-8');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database initialization (SQLite local relational DB)
$dbPath = __DIR__ . '/../database/database.sqlite';
$isNew = !file_exists($dbPath);

try {
    $pdo = new PDO('sqlite:' . $dbPath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Initial Schema & Migrations
    if ($isNew || filesize($dbPath) === 0) {
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                role TEXT DEFAULT 'user',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS personal_access_tokens (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tokenable_id INTEGER NOT NULL,
                name TEXT NOT NULL,
                token TEXT UNIQUE NOT NULL,
                abilities TEXT DEFAULT '[\"*\"]',
                last_used_at DATETIME,
                expires_at DATETIME,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (tokenable_id) REFERENCES users(id) ON DELETE CASCADE
            );

            CREATE TABLE IF NOT EXISTS routes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                route_code TEXT UNIQUE NOT NULL,
                origin_name TEXT NOT NULL,
                destination_name TEXT NOT NULL,
                distance_km REAL NOT NULL,
                estimated_minutes INTEGER NOT NULL,
                base_price REAL NOT NULL,
                nodes_data TEXT, -- JSON coordinates & nodes
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            );

            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                order_number TEXT UNIQUE NOT NULL,
                user_id INTEGER NOT NULL,
                route_id INTEGER NOT NULL,
                driver_id INTEGER,
                package_type TEXT NOT NULL,
                weight_kg REAL NOT NULL,
                total_cost REAL NOT NULL,
                monthly_installment REAL DEFAULT 0,
                tenure_months INTEGER DEFAULT 1,
                status TEXT DEFAULT 'pending', -- pending, in_transit, delivered, cancelled
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (route_id) REFERENCES routes(id) ON DELETE RESTRICT
            );
        ");

        // Seeders
        $passHash = password_hash('password123', PASSWORD_BCRYPT);
        $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)")->execute([
            'Admin Placeholder', 'admin@placeholder.test', $passHash, 'admin'
        ]);
        $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)")->execute([
            'Driver Placeholder', 'driver@placeholder.test', $passHash, 'driver'
        ]);
        $pdo->prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)")->execute([
            'Customer Placeholder', 'customer@placeholder.test', $passHash, 'customer'
        ]);

        // Seed Routes
        $pdo->prepare("INSERT INTO routes (route_code, origin_name, destination_name, distance_km, estimated_minutes, base_price, nodes_data) VALUES (?, ?, ?, ?, ?, ?, ?)")->execute([
            'RT-CGK-BDG', 'Jakarta Hub (Garasi)', 'Bandung Drop Point', 152.5, 140, 250000,
            json_encode([['id' => 'N1', 'x' => 120, 'y' => 180], ['id' => 'N2', 'x' => 380, 'y' => 240], ['id' => 'N3', 'x' => 640, 'y' => 320]])
        ]);
        $pdo->prepare("INSERT INTO routes (route_code, origin_name, destination_name, distance_km, estimated_minutes, base_price, nodes_data) VALUES (?, ?, ?, ?, ?, ?, ?)")->execute([
            'RT-BDG-SBY', 'Bandung Central', 'Surabaya Port', 680.0, 520, 850000,
            json_encode([['id' => 'N3', 'x' => 640, 'y' => 320], ['id' => 'N4', 'x' => 820, 'y' => 450]])
        ]);

        // Seed Sample Orders
        $pdo->prepare("INSERT INTO orders (order_number, user_id, route_id, package_type, weight_kg, total_cost, monthly_installment, tenure_months, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")->execute([
            'ORD-2026-001', 3, 1, 'Express Logistics', 12.5, 312500, 104166.67, 3, 'in_transit'
        ]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed', 'message' => $e->getMessage()]);
    exit;
}

// Routing helper
$uri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($uri, PHP_URL_PATH) ?? '/';

// Normalize path to strip possible prefix
$path = preg_replace('#^.*?/api/v1#', '/api/v1', $path);

// Helper JSON responses
function jsonResponse(int $code, array $data): void {
    http_response_code($code);
    echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

// Token helper (Laravel Sanctum Simulation)
function getBearerToken(): ?string {
    $auth = $_SERVER['HTTP_AUTHORIZATION'] ?? null;
    if (!$auth && function_exists('getallheaders')) {
        $headers = getallheaders();
        $auth = $headers['Authorization'] ?? $headers['authorization'] ?? null;
    }
    if ($auth && preg_match('/Bearer\s+(\S+)/i', $auth, $matches)) {
        return $matches[1];
    }
    return null;
}

function authenticate(PDO $pdo): ?array {
    $token = getBearerToken();
    if (!$token) return null;
    
    $stmt = $pdo->prepare("
        SELECT u.* FROM users u 
        INNER JOIN personal_access_tokens t ON u.id = t.tokenable_id 
        WHERE t.token = ?
    ");
    $stmt->execute([$token]);
    $user = $stmt->fetch();
    return $user ?: null;
}

$rawInput = file_get_contents('php://input');
$body = json_decode($rawInput, true) ?? $_POST ?? [];

// ==================== ENDPOINTS ====================

// 1. POST /api/v1/auth/login
if ($path === '/api/v1/auth/login' && $method === 'POST') {
    $email = trim($body['email'] ?? '');
    $password = trim($body['password'] ?? '');

    $errors = [];
    if (empty($email)) $errors['email'] = ['Field email wajib diisi.'];
    if (empty($password)) $errors['password'] = ['Field password wajib diisi.'];

    if (!empty($errors)) {
        jsonResponse(422, [
            'message' => 'The given data was invalid.',
            'errors' => $errors
        ]);
    }

    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password'])) {
        jsonResponse(401, [
            'message' => 'Email atau password yang Anda masukkan salah.',
            'status' => 'Unauthorized'
        ]);
    }

    // Generate Sanctum token
    $tokenString = bin2hex(random_bytes(32));
    $stmt = $pdo->prepare("INSERT INTO personal_access_tokens (tokenable_id, name, token) VALUES (?, ?, ?)");
    $stmt->execute([$user['id'], 'spa_token', $tokenString]);

    jsonResponse(200, [
        'status' => 'success',
        'message' => 'Login berhasil.',
        'access_token' => $tokenString,
        'token_type' => 'Bearer',
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'role' => $user['role']
        ]
    ]);
}

// 2. POST /api/v1/auth/logout
if ($path === '/api/v1/auth/logout' && $method === 'POST') {
    $token = getBearerToken();
    if (!$token) {
        jsonResponse(401, ['message' => 'Unauthenticated.']);
    }

    $stmt = $pdo->prepare("DELETE FROM personal_access_tokens WHERE token = ?");
    $stmt->execute([$token]);

    jsonResponse(200, [
        'status' => 'success',
        'message' => 'Logout berhasil. Token telah dicabut.'
    ]);
}

// Protected route middleware check for below routes
$currentUser = authenticate($pdo);

// 3. GET /api/v1/auth/me
if ($path === '/api/v1/auth/me' && $method === 'GET') {
    if (!$currentUser) {
        jsonResponse(401, ['message' => 'Unauthenticated. Token tidak valid atau kedaluwarsa.']);
    }
    jsonResponse(200, [
        'status' => 'success',
        'user' => [
            'id' => $currentUser['id'],
            'name' => $currentUser['name'],
            'email' => $currentUser['email'],
            'role' => $currentUser['role']
        ]
    ]);
}

// 4. GET & POST /api/v1/routes
if ($path === '/api/v1/routes') {
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM routes ORDER BY id DESC");
        jsonResponse(200, [
            'status' => 'success',
            'data' => $stmt->fetchAll()
        ]);
    }

    if ($method === 'POST') {
        if (!$currentUser) jsonResponse(401, ['message' => 'Unauthenticated.']);
        
        $routeCode = trim($body['route_code'] ?? '');
        $origin = trim($body['origin_name'] ?? '');
        $destination = trim($body['destination_name'] ?? '');
        $distance = floatval($body['distance_km'] ?? 0);
        $est = intval($body['estimated_minutes'] ?? 0);
        $price = floatval($body['base_price'] ?? 0);

        $errors = [];
        if (!$routeCode) $errors['route_code'] = ['Kode rute wajib diisi.'];
        if (!$origin) $errors['origin_name'] = ['Asal rute wajib diisi.'];
        if (!$destination) $errors['destination_name'] = ['Tujuan rute wajib diisi.'];
        if ($distance <= 0) $errors['distance_km'] = ['Jarak harus lebih besar dari 0 km.'];

        if (!empty($errors)) {
            jsonResponse(422, ['message' => 'Validation error', 'errors' => $errors]);
        }

        $stmt = $pdo->prepare("INSERT INTO routes (route_code, origin_name, destination_name, distance_km, estimated_minutes, base_price, nodes_data) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$routeCode, $origin, $destination, $distance, $est, $price, json_encode($body['nodes_data'] ?? [])]);

        jsonResponse(200, [
            'status' => 'success',
            'message' => 'Rute berhasil ditambahkan.',
            'route_id' => $pdo->lastInsertId()
        ]);
    }
}

// 5. GET & POST /api/v1/orders
if ($path === '/api/v1/orders') {
    if ($method === 'GET') {
        if (!$currentUser) jsonResponse(401, ['message' => 'Unauthenticated.']);

        $stmt = $pdo->query("
            SELECT o.*, u.name as customer_name, r.origin_name, r.destination_name, r.distance_km 
            FROM orders o
            LEFT JOIN users u ON o.user_id = u.id
            LEFT JOIN routes r ON o.route_id = r.id
            ORDER BY o.id DESC
        ");
        jsonResponse(200, [
            'status' => 'success',
            'data' => $stmt->fetchAll()
        ]);
    }

    if ($method === 'POST') {
        if (!$currentUser) jsonResponse(401, ['message' => 'Unauthenticated.']);

        $routeId = intval($body['route_id'] ?? 0);
        $pkgType = trim($body['package_type'] ?? 'Standard Cargo');
        $weight = floatval($body['weight_kg'] ?? 1);
        $tenure = max(1, intval($body['tenure_months'] ?? 1));

        $errors = [];
        if ($routeId <= 0) $errors['route_id'] = ['Pilih rute yang valid.'];
        if ($weight <= 0) $errors['weight_kg'] = ['Berat minimal 0.1 kg.'];

        if (!empty($errors)) {
            jsonResponse(422, ['message' => 'Validation error', 'errors' => $errors]);
        }

        // Fetch route
        $rStmt = $pdo->prepare("SELECT * FROM routes WHERE id = ?");
        $rStmt->execute([$routeId]);
        $route = $rStmt->fetch();
        if (!$route) jsonResponse(422, ['errors' => ['route_id' => ['Rute tidak ditemukan.']]]);

        // Dynamic cost & installment calculation
        $base = floatval($route['base_price']);
        $totalCost = $base + ($weight * 12500);
        // Bunga angsuran 2.5% per bulan jika diangsur
        $interest = ($tenure > 1) ? ($totalCost * 0.025 * $tenure) : 0;
        $grandTotal = $totalCost + $interest;
        $monthlyInstallment = round($grandTotal / $tenure, 2);

        $orderNum = 'ORD-' . date('Ymd') . '-' . strtoupper(substr(uniqid(), -4));

        $stmt = $pdo->prepare("
            INSERT INTO orders (order_number, user_id, route_id, package_type, weight_kg, total_cost, monthly_installment, tenure_months, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
        ");
        $stmt->execute([
            $orderNum, $currentUser['id'], $routeId, $pkgType, $weight, $grandTotal, $monthlyInstallment, $tenure
        ]);

        jsonResponse(200, [
            'status' => 'success',
            'message' => 'Pesanan berhasil dibuat.',
            'order' => [
                'order_number' => $orderNum,
                'total_cost' => $grandTotal,
                'monthly_installment' => $monthlyInstallment,
                'tenure_months' => $tenure
            ]
        ]);
    }
}

// 6. Default Fallback
jsonResponse(404, [
    'status' => 'error',
    'message' => 'Endpoint API tidak ditemukan.',
    'requested_path' => $path
]);
