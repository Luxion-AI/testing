<?php

$uri = $_SERVER['REQUEST_URI'] ?? '/';
$path = parse_url($uri, PHP_URL_PATH) ?? '/';

if (str_starts_with($path, '/api/v1') || 
    str_starts_with($path, '/XX_SERVER_MODULE/BACKEND/api/v1') ||
    str_starts_with($path, '/XX_SERVER_MODULE/BACKEND/public/index.php') ||
    str_starts_with($path, '/XX_SERVER_MODULE/BACKEND/public')) {
    require __DIR__ . '/XX_SERVER_MODULE/BACKEND/public/index.php';
    return;
}

$filePath = __DIR__ . $path;
if ($path !== '/' && file_exists($filePath) && !is_dir($filePath)) {
    return false; 
}

if ($path === '/' || !file_exists($filePath)) {
    require __DIR__ . '/index.html';
    return;
}

return false;
