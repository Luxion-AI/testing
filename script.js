const VIDEOS = [
  {
    id: "kUMe1FH4CHE",
    title: "Belajar HTML & CSS Lengkap untuk Pemula dari Nol sampai Mahir (2026)",
    channel: "Web Programming UNPAS",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=720&h=405&fit=crop",
    views: "540 rb",
    time: "2 minggu lalu",
    duration: "42:15",
    category: "Coding",
    verified: true,
    likes: "32 rb",
    subscribers: "1,4 jt subscriber",
    desc: "Panduan coding website dasar dengan HTML5 dan CSS3 Flexbox/Grid modern."
  },
  {
    id: "W6NZfCO5SIk",
    title: "JavaScript Tutorial Full Course - Beginner to Advanced",
    channel: "FreeCodeCamp ID",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=720&h=405&fit=crop",
    views: "1,2 jt",
    time: "1 bulan lalu",
    duration: "3:26:10",
    category: "Coding",
    verified: true,
    likes: "89 rb",
    subscribers: "3,2 jt subscriber",
    desc: "Pelajari ES6+, Async/Await, DOM Manipulation, dan best practices JavaScript."
  },
  {
    id: "zjkBMFhNj_g",
    title: "Pengenalan Artificial Intelligence & Large Language Models (LLM)",
    channel: "AI Nusantara",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=720&h=405&fit=crop",
    views: "310 rb",
    time: "3 hari lalu",
    duration: "18:45",
    category: "AI",
    verified: true,
    likes: "25 rb",
    subscribers: "850 rb subscriber",
    desc: "Cara kerja model AI modern dan transformer dalam bahasa yang mudah dimengerti."
  },
  {
    id: "kJQP7kiw5Fk",
    title: "Lofi Hip Hop Radio - Beats to Relax / Study to [Live 24/7]",
    channel: "Chillhop Vibes",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=720&h=405&fit=crop",
    views: "4,5 jt",
    time: "Live sekarang",
    duration: "LIVE",
    category: "Musik",
    verified: true,
    likes: "210 rb",
    subscribers: "5,1 jt subscriber",
    desc: "Musik santai untuk fokus bekerja, belajar, dan waktu istirahat."
  },
  {
    id: "e_Tgo8-Vd_I",
    title: "Membangun Kota Modern di Minecraft Survival 100 Hari!",
    channel: "Gamer Santuy ID",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=720&h=405&fit=crop",
    views: "890 rb",
    time: "5 hari lalu",
    duration: "28:12",
    category: "Gaming",
    verified: false,
    likes: "67 rb",
    subscribers: "920 rb subscriber",
    desc: "Tantangan membangun megacity survival dari awal hingga akhir."
  },
  {
    id: "aircAruvnKk",
    title: "Masa Depan Quantum Computing: Apakah Kita Siap?",
    channel: "Tech Review ID",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&h=405&fit=crop",
    views: "185 rb",
    time: "1 minggu lalu",
    duration: "14:20",
    category: "Teknologi",
    verified: true,
    likes: "14 rb",
    subscribers: "420 rb subscriber",
    desc: "Penjelasan mendalam cara kerja chip kuantum masa depan."
  },
  {
    id: "7QTR_bO7g84",
    title: "Eksplorasi Kuliner Malam Legendaris di Sudut Kota Jakarta",
    channel: "Street Food Nusantara",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=720&h=405&fit=crop",
    views: "720 rb",
    time: "4 hari lalu",
    duration: "21:30",
    category: "Kuliner",
    verified: true,
    likes: "45 rb",
    subscribers: "1,1 jt subscriber",
    desc: "Wisata rasa mencicipi ragam makanan legendaris khas Indonesia."
  },
  {
    id: "fJ9rUzIMcZQ",
    title: "Podcaster Spesial: Rahasia Sukses Bangun Startup di Usia Muda",
    channel: "Bincang Santai Podcast",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=720&h=405&fit=crop",
    views: "430 rb",
    time: "6 hari lalu",
    duration: "58:04",
    category: "Podcast",
    verified: true,
    likes: "38 rb",
    subscribers: "2,0 jt subscriber",
    desc: "Tips berharga dari para pelaku industri rintisan teknologi."
  },
  {
    id: "SqcY0GlETPk",
    title: "Belajar React 19 & Tailwind CSS: Bangun Web App Interaktif",
    channel: "Code Mastery",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=720&h=405&fit=crop",
    views: "290 rb",
    time: "2 minggu lalu",
    duration: "45:10",
    category: "Coding",
    verified: true,
    likes: "19 rb",
    subscribers: "670 rb subscriber",
    desc: "Tutorial praktis integrasi React Hooks dan Tailwind CSS terbaru."
  },
  {
    id: "JGwWNGJdvx8",
    title: "Highlight Pertandingan Final Sepak Bola Penentu Gelar Juara",
    channel: "Sport Time ID",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=720&h=405&fit=crop",
    views: "1,8 jt",
    time: "1 hari lalu",
    duration: "12:44",
    category: "Olahraga",
    verified: true,
    likes: "115 rb",
    subscribers: "2,8 jt subscriber",
    desc: "Rangkuman gol-gol dramatis laga final kejuaraan bergengsi."
  },
  {
    id: "2Vv-BfVoq4g",
    title: "Review Lengkap Supercar Listrik Terbaru di Lintasan Balap",
    channel: "Otomotif ID",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=720&h=405&fit=crop",
    views: "610 rb",
    time: "3 minggu lalu",
    duration: "19:55",
    category: "Otomotif",
    verified: true,
    likes: "41 rb",
    subscribers: "1,5 jt subscriber",
    desc: "Uji performa akselerasi, baterai, dan sistem suspensi adaptif."
  },
  {
    id: "fBNz5xF-Kx4",
    title: "Animasi 3D Blender 4.0: Tutorial Bikin Karakter dari Dasar",
    channel: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=720&h=405&fit=crop",
    views: "340 rb",
    time: "1 bulan lalu",
    duration: "34:20",
    category: "Animasi",
    verified: false,
    likes: "28 rb",
    subscribers: "490 rb subscriber",
    desc: "Langkah mudah memahami 3D modelling, texturing, dan render visual."
  }
];

const CATEGORIES = ["Semua", "Coding", "Musik", "Gaming", "Teknologi", "AI", "Podcast", "Kuliner", "Olahraga", "Otomotif", "Animasi"];

const state = {
  category: "Semua",
  search: "",
  liked: false,
  subscribed: false
};

const dom = {
  chipsBar: document.getElementById("chips-bar"),
  videoGrid: document.getElementById("video-grid"),
  emptyState: document.getElementById("empty-state"),
  searchForm: document.getElementById("search-form"),
  searchInput: document.getElementById("search-input"),
  clearSearch: document.getElementById("clear-search"),
  voiceBtn: document.getElementById("voice-btn"),
  menuToggle: document.getElementById("menu-toggle"),
  sidebar: document.getElementById("sidebar"),
  sidebarBackdrop: document.getElementById("sidebar-backdrop"),
  themeToggle: document.getElementById("theme-toggle"),
  toast: document.getElementById("toast"),
  resetFilter: document.getElementById("reset-filter"),
  createBtn: document.getElementById("create-btn"),
  notifBtn: document.getElementById("notif-btn"),
  notifDropdown: document.getElementById("notif-dropdown"),
  profileBtn: document.getElementById("profile-btn"),
  profileDropdown: document.getElementById("profile-dropdown"),
  modal: document.getElementById("video-modal"),
  modalClose: document.getElementById("modal-close"),
  modalBackdrop: document.getElementById("modal-backdrop"),
  modalIframe: document.getElementById("modal-iframe"),
  modalTitle: document.getElementById("modal-title"),
  modalChannel: document.getElementById("modal-channel"),
  modalAvatar: document.getElementById("modal-avatar"),
  modalSubscribers: document.getElementById("modal-subscribers"),
  modalStats: document.getElementById("modal-stats"),
  modalDesc: document.getElementById("modal-desc"),
  btnSubscribe: document.getElementById("btn-subscribe"),
  btnLike: document.getElementById("btn-like"),
  likeCount: document.getElementById("like-count")
};

function showToast(msg) {
  dom.toast.textContent = msg;
  dom.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => dom.toast.classList.remove("show"), 2500);
}

function renderChips() {
  dom.chipsBar.innerHTML = CATEGORIES.map(cat => `
    <button class="chip ${cat === state.category ? "active" : ""}" data-category="${cat}">${cat}</button>
  `).join("");
}

function renderVideos(list) {
  if (!list.length) {
    dom.videoGrid.style.display = "none";
    dom.emptyState.style.display = "block";
    return;
  }

  dom.emptyState.style.display = "none";
  dom.videoGrid.style.display = "grid";

  dom.videoGrid.innerHTML = list.map(v => `
    <article class="video-card" data-id="${v.id}">
      <div class="video-thumb">
        <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
        <span class="duration">${v.duration}</span>
      </div>
      <div class="video-info">
        <img src="${v.avatar}" class="avatar-sm" alt="${v.channel}">
        <div class="video-details">
          <h3 class="video-title" title="${v.title}">${v.title}</h3>
          <div class="channel-name">
            <span>${v.channel}</span>
            ${v.verified ? `<svg class="icon-sm" style="width:14px;height:14px"><use href="#icon-verified"/></svg>` : ""}
          </div>
          <div class="video-stats">${v.views} x ditonton &bull; ${v.time}</div>
        </div>
      </div>
    </article>
  `).join("");
}

function filterVideos() {
  const query = state.search.trim().toLowerCase();
  const filtered = VIDEOS.filter(v => {
    const matchCat = state.category === "Semua" ||
      v.category.toLowerCase() === state.category.toLowerCase() ||
      (state.category === "Trending" && v.views.includes("jt")) ||
      (state.category === "Shorts" && v.duration.startsWith("0:"));

    const matchQuery = !query ||
      v.title.toLowerCase().includes(query) ||
      v.channel.toLowerCase().includes(query) ||
      v.category.toLowerCase().includes(query);

    return matchCat && matchQuery;
  });

  renderVideos(filtered);
}

function setCategory(cat) {
  state.category = cat;
  renderChips();
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.category === cat);
  });
  filterVideos();
}

function openModal(video) {
  dom.modalTitle.textContent = video.title;
  dom.modalChannel.textContent = video.channel;
  dom.modalAvatar.src = video.avatar;
  dom.modalSubscribers.textContent = video.subscribers;
  dom.modalStats.textContent = `${video.views} x ditonton • ${video.time}`;
  dom.modalDesc.textContent = video.desc;
  dom.likeCount.textContent = video.likes;
  dom.modalIframe.src = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;

  state.liked = false;
  state.subscribed = false;
  dom.btnLike.style.color = "inherit";
  dom.btnSubscribe.textContent = "Subscribe";
  dom.btnSubscribe.classList.remove("subscribed");

  dom.modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  dom.modal.classList.remove("active");
  dom.modalIframe.src = "";
  document.body.style.overflow = "";
}

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    dom.sidebar.classList.toggle("mobile-open");
    dom.sidebarBackdrop.classList.toggle("active");
  } else {
    document.body.classList.toggle("sidebar-collapsed");
  }
}

function closeMobileSidebar() {
  dom.sidebar.classList.remove("mobile-open");
  dom.sidebarBackdrop.classList.remove("active");
}

function toggleTheme() {
  const isLight = document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme", !isLight);
  localStorage.setItem("yt-theme", isLight ? "light" : "dark");
  showToast(isLight ? "Beralih ke Tema Terang" : "Beralih ke Tema Gelap");
}

dom.chipsBar.addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (chip) setCategory(chip.dataset.category);
});

dom.videoGrid.addEventListener("click", e => {
  const card = e.target.closest(".video-card");
  if (!card) return;
  const video = VIDEOS.find(v => v.id === card.dataset.id);
  if (video) openModal(video);
});

dom.sidebar.addEventListener("click", e => {
  const link = e.target.closest(".nav-link");
  if (link && link.dataset.category) {
    e.preventDefault();
    setCategory(link.dataset.category);
    closeMobileSidebar();
  }
});

dom.searchInput.addEventListener("input", e => {
  state.search = e.target.value;
  dom.clearSearch.style.display = state.search ? "block" : "none";
  filterVideos();
});

dom.clearSearch.addEventListener("click", () => {
  dom.searchInput.value = "";
  state.search = "";
  dom.clearSearch.style.display = "none";
  dom.searchInput.focus();
  filterVideos();
});

dom.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  filterVideos();
});

dom.resetFilter.addEventListener("click", () => {
  dom.searchInput.value = "";
  state.search = "";
  dom.clearSearch.style.display = "none";
  setCategory("Semua");
});

dom.voiceBtn.addEventListener("click", () => {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showToast("Fitur suara tidak didukung oleh browser ini.");
    return;
  }
  const rec = new SR();
  rec.lang = "id-ID";
  showToast("Mendengarkan...");
  rec.onresult = ev => {
    const text = ev.results[0][0].transcript;
    dom.searchInput.value = text;
    state.search = text;
    dom.clearSearch.style.display = "block";
    filterVideos();
    showToast(`Mencari: "${text}"`);
  };
  rec.onerror = () => showToast("Gagal mengenali suara.");
  rec.start();
});

dom.menuToggle.addEventListener("click", toggleSidebar);
dom.sidebarBackdrop.addEventListener("click", closeMobileSidebar);
dom.themeToggle.addEventListener("click", toggleTheme);
dom.modalClose.addEventListener("click", closeModal);
dom.modalBackdrop.addEventListener("click", closeModal);

window.addEventListener("keydown", e => {
  if (e.key === "Escape" && dom.modal.classList.contains("active")) closeModal();
});

dom.btnSubscribe.addEventListener("click", () => {
  state.subscribed = !state.subscribed;
  dom.btnSubscribe.textContent = state.subscribed ? "Disubscribe" : "Subscribe";
  dom.btnSubscribe.classList.toggle("subscribed", state.subscribed);
  showToast(state.subscribed ? `Berlangganan ${dom.modalChannel.textContent}` : "Batal berlangganan");
});

dom.btnLike.addEventListener("click", () => {
  state.liked = !state.liked;
  dom.btnLike.style.color = state.liked ? "#3ea6ff" : "inherit";
  showToast(state.liked ? "Menyukai video" : "Batal menyukai video");
});

dom.notifBtn.addEventListener("click", e => {
  e.stopPropagation();
  dom.notifDropdown.classList.toggle("open");
  dom.profileDropdown.classList.remove("open");
});

dom.profileBtn.addEventListener("click", e => {
  e.stopPropagation();
  dom.profileDropdown.classList.toggle("open");
  dom.notifDropdown.classList.remove("open");
});

window.addEventListener("click", () => {
  dom.notifDropdown.classList.remove("open");
  dom.profileDropdown.classList.remove("open");
});

dom.createBtn.addEventListener("click", () => {
  showToast("Fitur upload video / Go Live");
});

if (localStorage.getItem("yt-theme") === "light") {
  document.body.classList.replace("dark-theme", "light-theme");
}

renderChips();
renderVideos(VIDEOS);

/* ==========================================================================
   INTEGRASI MODUL A & MODUL B (ES6+ VANILLA JAVASCRIPT & DOM MANIPULATION)
   ========================================================================== */

// --- SPA Tab Switcher (Beranda, Peta & Pathfinding, Dispatch Orders) ---
function switchSPATab(targetTab) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-tab") === targetTab);
  });

  document.querySelectorAll(".spa-view").forEach(view => {
    view.classList.remove("active");
  });

  const targetView = document.getElementById(`view-${targetTab}`);
  if (targetView) {
    targetView.classList.add("active");
    if (targetTab === "map") {
      renderMapSVG();
    } else if (targetTab === "orders") {
      checkAuthAndRenderOrders();
    }
  }
}

document.querySelectorAll(".nav-link[data-tab]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const tab = link.getAttribute("data-tab");
    switchSPATab(tab);
    closeMobileSidebar();
  });
});

/* ==========================================================================
   MODUL A: DYNAMIC SVG MAP, GEOMETRY, PAN/ZOOM & DIJKSTRA PATHFINDING
   ========================================================================== */

const MAP_STORAGE_KEY = "yt_lks_map_graph_data";

// Initial preset nodes & edges
const DEFAULT_MAP_DATA = {
  nodes: [
    { id: "A", name: "Hub Jakarta (A)", x: 220, y: 160 },
    { id: "B", name: "Depok Hub (B)", x: 280, y: 340 },
    { id: "C", name: "Bekasi Logistics (C)", x: 500, y: 190 },
    { id: "D", name: "Bogor Point (D)", x: 340, y: 520 },
    { id: "E", name: "Cikarang Dry Port (E)", x: 680, y: 260 },
    { id: "F", name: "Bandung Distribution (F)", x: 860, y: 480 }
  ],
  edges: [
    { from: "A", to: "B", distanceKm: 35, durationMin: 45, costRp: 45000 },
    { from: "A", to: "C", distanceKm: 28, durationMin: 35, costRp: 40000 },
    { from: "B", to: "D", distanceKm: 42, durationMin: 55, costRp: 55000 },
    { from: "B", to: "C", distanceKm: 32, durationMin: 50, costRp: 42000 },
    { from: "C", to: "E", distanceKm: 40, durationMin: 40, costRp: 50000 },
    { from: "D", to: "F", distanceKm: 120, durationMin: 130, costRp: 150000 },
    { from: "E", to: "F", distanceKm: 95, durationMin: 110, costRp: 130000 },
    { from: "C", to: "F", distanceKm: 135, durationMin: 150, costRp: 180000 }
  ]
};

// Graph State with localStorage persistence
let mapGraph = JSON.parse(localStorage.getItem(MAP_STORAGE_KEY)) || DEFAULT_MAP_DATA;

function saveMapGraph() {
  localStorage.setItem(MAP_STORAGE_KEY, JSON.stringify(mapGraph));
  updateDropdowns();
}

// Pan & Zoom Transform State
let mapTransform = {
  scale: 1.0,
  x: 0,
  y: 0,
  isPanning: false,
  startX: 0,
  startY: 0
};

let selectedNodeForEdge = null;
let activeHighlightEdges = [];

const mapViewport = document.getElementById("map-viewport");
const svgTransformGroup = document.getElementById("map-transform-group");
const svgLayerLines = document.getElementById("svg-layer-lines");
const svgLayerLabels = document.getElementById("svg-layer-labels");
const svgLayerNodes = document.getElementById("svg-layer-nodes");
const zoomLevelLabel = document.getElementById("zoom-level-label");
const routeStartSelect = document.getElementById("route-start-select");
const routeEndSelect = document.getElementById("route-end-select");
const routeSortSelect = document.getElementById("route-sort-select");
const routeResultsList = document.getElementById("route-results-list");
const routeCountBadge = document.getElementById("route-count-badge");

function applyMapTransform() {
  svgTransformGroup.setAttribute(
    "transform",
    `matrix(${mapTransform.scale}, 0, 0, ${mapTransform.scale}, ${mapTransform.x}, ${mapTransform.y})`
  );
  zoomLevelLabel.textContent = `${Math.round(mapTransform.scale * 100)}%`;
}

// Pan interactions: mousedown, mousemove, mouseup
mapViewport.addEventListener("mousedown", e => {
  // Hanya pan jika klik di area viewport bukan di node
  if (e.target.closest(".svg-node")) return;
  mapTransform.isPanning = true;
  mapTransform.startX = e.clientX - mapTransform.x;
  mapTransform.startY = e.clientY - mapTransform.y;
  mapViewport.style.cursor = "grabbing";
});

window.addEventListener("mousemove", e => {
  if (!mapTransform.isPanning) return;
  mapTransform.x = e.clientX - mapTransform.startX;
  mapTransform.y = e.clientY - mapTransform.startY;
  applyMapTransform();
});

window.addEventListener("mouseup", () => {
  if (mapTransform.isPanning) {
    mapTransform.isPanning = false;
    mapViewport.style.cursor = "grab";
  }
});

// Zoom interactions: CTRL + Wheel & Buttons
mapViewport.addEventListener("wheel", e => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    const rect = mapViewport.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
    zoomAtPoint(mouseX, mouseY, zoomFactor);
  }
}, { passive: false });

function zoomAtPoint(screenX, screenY, factor) {
  const newScale = Math.min(Math.max(0.4, mapTransform.scale * factor), 3.0);
  // Fokus zoom mengikuti posisi kursor
  mapTransform.x = screenX - (screenX - mapTransform.x) * (newScale / mapTransform.scale);
  mapTransform.y = screenY - (screenY - mapTransform.y) * (newScale / mapTransform.scale);
  mapTransform.scale = newScale;
  applyMapTransform();
}

document.getElementById("btn-zoom-in").addEventListener("click", () => {
  const rect = mapViewport.getBoundingClientRect();
  zoomAtPoint(rect.width / 2, rect.height / 2, 1.2);
});

document.getElementById("btn-zoom-out").addEventListener("click", () => {
  const rect = mapViewport.getBoundingClientRect();
  zoomAtPoint(rect.width / 2, rect.height / 2, 0.83);
});

document.getElementById("btn-reset-zoom").addEventListener("click", () => {
  mapTransform.scale = 1.0;
  mapTransform.x = 0;
  mapTransform.y = 0;
  applyMapTransform();
});

// Shortcut Keydown (+/- zoom dan Escape)
mapViewport.addEventListener("keydown", e => {
  const rect = mapViewport.getBoundingClientRect();
  if (e.key === "+" || e.key === "=") {
    zoomAtPoint(rect.width / 2, rect.height / 2, 1.15);
  } else if (e.key === "-") {
    zoomAtPoint(rect.width / 2, rect.height / 2, 0.85);
  }
});

// Double click to add new Pinpoint (circle)
mapViewport.addEventListener("dblclick", e => {
  const rect = mapViewport.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;

  // Transform dari viewport screen ke koordinat SVG
  const svgX = Math.round((clickX - mapTransform.x) / mapTransform.scale);
  const svgY = Math.round((clickY - mapTransform.y) / mapTransform.scale);

  // Buat ID baru
  const charCode = 65 + mapGraph.nodes.length;
  const nextId = charCode <= 90 ? String.fromCharCode(charCode) : `N${mapGraph.nodes.length + 1}`;
  const nodeName = `Titik Hub ${nextId}`;

  mapGraph.nodes.push({ id: nextId, name: nodeName, x: svgX, y: svgY });
  saveMapGraph();
  renderMapSVG();
  showToast(`Pinpoint ${nextId} ditambahkan di (${svgX}, ${svgY})`);
});

// Render SVG Map Elements
function renderMapSVG() {
  if (!svgLayerLines || !svgLayerNodes || !svgLayerLabels) return;

  svgLayerLines.innerHTML = "";
  svgLayerLabels.innerHTML = "";
  svgLayerNodes.innerHTML = "";

  // 1. Draw Edges (<line> and midpoint badges)
  mapGraph.edges.forEach(edge => {
    const fromNode = mapGraph.nodes.find(n => n.id === edge.from);
    const toNode = mapGraph.nodes.find(n => n.id === edge.to);
    if (!fromNode || !toNode) return;

    const isActive = activeHighlightEdges.some(
      ae => (ae.from === edge.from && ae.to === edge.to) || (ae.from === edge.to && ae.to === edge.from)
    );

    // Visible connecting line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", fromNode.x);
    line.setAttribute("y1", fromNode.y);
    line.setAttribute("x2", toNode.x);
    line.setAttribute("y2", toNode.y);
    line.setAttribute("class", `svg-edge-line ${isActive ? "active-route" : ""}`);
    svgLayerLines.appendChild(line);

    // Geometry Calculation: Midpoint (X, Y)
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;

    // Midpoint Text & Badge (Jarak & Biaya)
    const gBadge = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gBadge.setAttribute("class", "svg-midpoint-badge");
    gBadge.setAttribute("transform", `translate(${midX}, ${midY})`);

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "-46");
    rect.setAttribute("y", "-11");
    rect.setAttribute("width", "92");
    rect.setAttribute("height", "22");
    gBadge.appendChild(rect);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("class", "svg-midpoint-text");
    text.textContent = `${edge.distanceKm}km | Rp${(edge.costRp / 1000).toFixed(0)}k`;
    gBadge.appendChild(text);

    svgLayerLabels.appendChild(gBadge);
  });

  // 2. Draw Nodes (<circle> pinpoint & text)
  mapGraph.nodes.forEach(node => {
    const isSelected = selectedNodeForEdge && selectedNodeForEdge.id === node.id;
    const gNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gNode.setAttribute("class", `svg-node ${isSelected ? "selected" : ""}`);
    gNode.setAttribute("transform", `translate(${node.x}, ${node.y})`);
    gNode.setAttribute("data-id", node.id);

    // Circle Marker
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", isSelected ? "15" : "12");
    circle.setAttribute("fill", isSelected ? "#ffd700" : "var(--yt-red)");
    gNode.appendChild(circle);

    // ID Text inside circle
    const textNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textNode.setAttribute("class", "svg-node-text");
    textNode.textContent = node.id;
    gNode.appendChild(textNode);

    // Sub-label name under node
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("class", "svg-node-label");
    label.setAttribute("y", "24");
    label.textContent = node.name;
    gNode.appendChild(label);

    // Click handler on Node: Create edge between 2 nodes
    gNode.addEventListener("click", e => {
      e.stopPropagation();
      handleNodeSelection(node);
    });

    svgLayerNodes.appendChild(gNode);
  });

  updateDropdowns();
}

function handleNodeSelection(node) {
  if (!selectedNodeForEdge) {
    selectedNodeForEdge = node;
    showToast(`Titik ${node.id} dipilih. Klik titik lain untuk menghubungkan garis koneksi.`);
    renderMapSVG();
  } else if (selectedNodeForEdge.id === node.id) {
    selectedNodeForEdge = null;
    showToast("Pemilihan titik dibatalkan.");
    renderMapSVG();
  } else {
    // Hubungkan node 1 dan node 2
    const n1 = selectedNodeForEdge;
    const n2 = node;
    selectedNodeForEdge = null;

    // Cek apakah edge sudah ada
    const exists = mapGraph.edges.some(
      e => (e.from === n1.id && e.to === n2.id) || (e.from === n2.id && e.to === n1.id)
    );

    if (exists) {
      showToast(`Jalur antara ${n1.id} dan ${n2.id} sudah ada.`);
    } else {
      // Hitung jarak Euclidean
      const dx = n2.x - n1.x;
      const dy = n2.y - n1.y;
      const distPx = Math.sqrt(dx * dx + dy * dy);
      const distKm = Math.round(distPx * 0.25);
      const durationMin = Math.round(distKm * 1.2);
      const costRp = Math.round(distKm * 1200 + 15000);

      mapGraph.edges.push({
        from: n1.id,
        to: n2.id,
        distanceKm: distKm,
        durationMin: durationMin,
        costRp: costRp
      });
      saveMapGraph();
      showToast(`Garis koneksi terhubung: ${n1.id} ⇄ ${n2.id} (${distKm} km, Rp ${costRp.toLocaleString()})`);
    }
    renderMapSVG();
  }
}

// Clear map and Reset to Defaults
document.getElementById("btn-clear-map").addEventListener("click", () => {
  if (confirm("Reset semua titik dan garis peta ke setelan awal?")) {
    mapGraph = JSON.parse(JSON.stringify(DEFAULT_MAP_DATA));
    saveMapGraph();
    activeHighlightEdges = [];
    selectedNodeForEdge = null;
    renderMapSVG();
    showToast("Peta berhasil direset ke setelan awal.");
  }
});

document.getElementById("btn-sample-data").addEventListener("click", () => {
  mapGraph = JSON.parse(JSON.stringify(DEFAULT_MAP_DATA));
  saveMapGraph();
  activeHighlightEdges = [];
  renderMapSVG();
  showToast("Preset peta LKS berhasil dimuat!");
});

// Update Select Dropdowns
function updateDropdowns() {
  const currentStart = routeStartSelect.value;
  const currentEnd = routeEndSelect.value;

  routeStartSelect.innerHTML = '<option value="">-- Pilih Titik Awal --</option>';
  routeEndSelect.innerHTML = '<option value="">-- Pilih Titik Tujuan --</option>';

  mapGraph.nodes.forEach(node => {
    const opt1 = document.createElement("option");
    opt1.value = node.id;
    opt1.textContent = `${node.id} — ${node.name}`;
    routeStartSelect.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = node.id;
    opt2.textContent = `${node.id} — ${node.name}`;
    routeEndSelect.appendChild(opt2);
  });

  if (currentStart) routeStartSelect.value = currentStart;
  if (currentEnd) routeEndSelect.value = currentEnd;
}

// ==========================================================================
// ALGORITMA GRAPH: DIJKSTRA / K-SHORTEST PATHS & SORTING
// ==========================================================================

function findAllPaths(startId, endId, maxPaths = 10) {
  const adj = {};
  mapGraph.nodes.forEach(n => (adj[n.id] = []));
  mapGraph.edges.forEach(e => {
    adj[e.from].push({ to: e.to, edge: e });
    adj[e.to].push({ to: e.from, edge: e });
  });

  const paths = [];

  function dfs(curr, visited, currentPath, totalDist, totalDuration, totalCost) {
    if (paths.length >= 25) return;
    if (curr === endId) {
      paths.push({
        nodeIds: [...currentPath],
        distanceKm: totalDist,
        durationMin: totalDuration,
        costRp: totalCost
      });
      return;
    }

    visited.add(curr);

    for (const neighbor of adj[curr]) {
      if (!visited.has(neighbor.to)) {
        dfs(
          neighbor.to,
          visited,
          [...currentPath, neighbor.to],
          totalDist + neighbor.edge.distanceKm,
          totalDuration + neighbor.edge.durationMin,
          totalCost + neighbor.edge.costRp
        );
      }
    }

    visited.delete(curr);
  }

  dfs(startId, new Set(), [startId], 0, 0, 0);
  return paths;
}

// Find Route Button Handler
document.getElementById("btn-find-routes").addEventListener("click", () => {
  const start = routeStartSelect.value;
  const end = routeEndSelect.value;
  const sortBy = routeSortSelect.value; // 'duration' or 'cost'

  if (!start || !end) {
    showToast("Silakan tentukan titik awal dan tujuan.");
    return;
  }
  if (start === end) {
    showToast("Titik awal dan tujuan tidak boleh sama.");
    return;
  }

  const allRoutes = findAllPaths(start, end);

  if (allRoutes.length === 0) {
    routeResultsList.innerHTML = `<div class="empty-route-state">Tidak ada jalur yang menghubungkan titik ${start} dan ${end}.</div>`;
    routeCountBadge.textContent = "0 Opsi";
    activeHighlightEdges = [];
    renderMapSVG();
    return;
  }

  // Sorting berdasarkan durasi tercepat atau biaya termurah
  if (sortBy === "duration") {
    allRoutes.sort((a, b) => a.durationMin - b.durationMin);
  } else {
    allRoutes.sort((a, b) => a.costRp - b.costRp);
  }

  const top10Routes = allRoutes.slice(0, 10);
  routeCountBadge.textContent = `${top10Routes.length} Opsi`;

  routeResultsList.innerHTML = "";
  top10Routes.forEach((route, index) => {
    const item = document.createElement("div");
    item.className = `route-item ${index === 0 ? "selected" : ""}`;
    item.innerHTML = `
      <div class="route-item-title">
        <span>Opsi #${index + 1} ${index === 0 ? "(Terbaik)" : ""}</span>
        <span>Rp ${route.costRp.toLocaleString("id-ID")}</span>
      </div>
      <div class="route-item-path">Jalur: ${route.nodeIds.join(" ➔ ")}</div>
      <div class="route-item-metrics">
        <span>⏱️ ${route.durationMin} mnt</span>
        <span>🛣️ ${route.distanceKm} km</span>
      </div>
    `;

    item.addEventListener("click", () => {
      document.querySelectorAll(".route-item").forEach(el => el.classList.remove("selected"));
      item.classList.add("selected");
      highlightRoute(route);
    });

    routeResultsList.appendChild(item);
  });

  // Default highlight rute terbaik (opsi #1)
  highlightRoute(top10Routes[0]);
  showToast(`Ditemukan ${top10Routes.length} alternatif rute terpendek/termurah.`);
});

function highlightRoute(route) {
  activeHighlightEdges = [];
  for (let i = 0; i < route.nodeIds.length - 1; i++) {
    activeHighlightEdges.push({
      from: route.nodeIds[i],
      to: route.nodeIds[i + 1]
    });
  }
  renderMapSVG();
}

/* ==========================================================================
   MODUL B: FRONTEND SPA & LARAVEL SANCTUM RESTful API CLIENT
   ========================================================================== */

const API_BASE_URL = window.location.origin.includes("localhost") || window.location.origin.includes("127.0.0.1")
  ? "/XX_SERVER_MODULE/BACKEND/public/index.php/api/v1"
  : "/api/v1";

const AUTH_TOKEN_KEY = "yt_sanctum_token";
const AUTH_USER_KEY = "yt_sanctum_user";

let currentAuthToken = localStorage.getItem(AUTH_TOKEN_KEY);
let currentAuthUser = JSON.parse(localStorage.getItem(AUTH_USER_KEY));

// Axios-style Fetch Wrapper with Bearer Token Authorization
async function apiRequest(endpoint, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...(options.headers || {})
  };

  if (currentAuthToken) {
    headers["Authorization"] = `Bearer ${currentAuthToken}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers
  });

  const data = await response.json().catch(() => ({}));

  if (response.status === 401) {
    // Unauthorized token expired
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    currentAuthToken = null;
    currentAuthUser = null;
    checkAuthAndRenderOrders();
    throw new Error(data.message || "Sesi berakhir. Silakan login kembali.");
  }

  if (!response.ok) {
    const error = new Error(data.message || `HTTP Error ${response.status}`);
    error.status = response.status;
    error.errors = data.errors || {};
    throw error;
  }

  return data;
}

function checkAuthAndRenderOrders() {
  const authGateBox = document.getElementById("auth-gate-box");
  const protectedContent = document.getElementById("protected-spa-content");
  const authUserBar = document.getElementById("auth-user-bar");

  if (!currentAuthToken || !currentAuthUser) {
    authGateBox.style.display = "block";
    protectedContent.style.display = "none";
    authUserBar.innerHTML = `<span class="badge badge-neutral">Belum Login</span>`;
  } else {
    authGateBox.style.display = "none";
    protectedContent.style.display = "grid";
    authUserBar.innerHTML = `
      <div class="auth-user-tag">
        <strong>${currentAuthUser.name}</strong> (${currentAuthUser.role})
        <button type="button" class="btn-ctrl btn-sm" id="btn-logout-sanctum" style="padding: 2px 8px; font-size: 0.75rem;">Logout</button>
      </div>
    `;

    document.getElementById("btn-logout-sanctum").addEventListener("click", logoutSanctum);

    loadAPIRoutes();
    loadAPIOrders();
  }
}

// Quick login buttons
document.querySelectorAll(".quick-login-pills .pill-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("login-email").value = btn.getAttribute("data-email");
    document.getElementById("login-pass").value = "password123";
  });
});

// Form Login Submit
document.getElementById("form-login").addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;
  const errorMsg = document.getElementById("login-error-msg");
  errorMsg.style.display = "none";

  try {
    const res = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });

    currentAuthToken = res.access_token;
    currentAuthUser = res.user;
    localStorage.setItem(AUTH_TOKEN_KEY, currentAuthToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(currentAuthUser));

    showToast(`Selamat datang, ${res.user.name}!`);
    checkAuthAndRenderOrders();
  } catch (err) {
    errorMsg.textContent = err.message || "Gagal masuk ke sistem.";
    errorMsg.style.display = "block";
  }
});

// Logout Sanctum
async function logoutSanctum() {
  try {
    await apiRequest("/auth/logout", { method: "POST" });
  } catch (e) {
    // ignore
  }
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
  currentAuthToken = null;
  currentAuthUser = null;
  showToast("Anda telah logout.");
  checkAuthAndRenderOrders();
}

// Load Routes for Order Selection
let cachedApiRoutes = [];
async function loadAPIRoutes() {
  try {
    const res = await apiRequest("/routes", { method: "GET" });
    cachedApiRoutes = res.data || [];
    const select = document.getElementById("order-route-select");
    select.innerHTML = '<option value="">-- Pilih Rute --</option>';

    cachedApiRoutes.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.route_code}: ${r.origin_name} ➔ ${r.destination_name} (${r.distance_km} km)`;
      select.appendChild(opt);
    });

    if (cachedApiRoutes.length > 0) {
      select.value = cachedApiRoutes[0].id;
      recalculateOrderCosts();
    }
  } catch (err) {
    console.error("Gagal memuat rute:", err);
  }
}

// Reactive Calculation: Base Price, Weight Cost, Total Cost, Monthly Installment
function recalculateOrderCosts() {
  const routeSelect = document.getElementById("order-route-select");
  const weightInput = document.getElementById("order-weight");
  const tenureSelect = document.getElementById("order-tenure");

  const routeId = parseInt(routeSelect.value, 10);
  const weight = parseFloat(weightInput.value) || 0;
  const tenure = parseInt(tenureSelect.value, 10) || 1;

  const route = cachedApiRoutes.find(r => r.id === routeId);
  const basePrice = route ? parseFloat(route.base_price) : 0;
  const weightCost = weight * 12500;
  const subtotal = basePrice + weightCost;

  // Bunga 2.5% per bulan jika memilih tenor cicilan > 1 bulan
  const interest = tenure > 1 ? subtotal * 0.025 * tenure : 0;
  const grandTotal = subtotal + interest;
  const monthlyInstallment = Math.round(grandTotal / tenure);

  document.getElementById("calc-base-price").textContent = `Rp ${basePrice.toLocaleString("id-ID")}`;
  document.getElementById("calc-weight-cost").textContent = `Rp ${weightCost.toLocaleString("id-ID")}`;
  document.getElementById("calc-total-cost").textContent = `Rp ${grandTotal.toLocaleString("id-ID")}`;
  document.getElementById("calc-installment").textContent = `Rp ${monthlyInstallment.toLocaleString("id-ID")} / bln (${tenure}x)`;
}

document.getElementById("order-route-select").addEventListener("change", recalculateOrderCosts);
document.getElementById("order-weight").addEventListener("input", recalculateOrderCosts);
document.getElementById("order-tenure").addEventListener("change", recalculateOrderCosts);

// Create Order Form Submit
document.getElementById("form-create-order").addEventListener("submit", async e => {
  e.preventDefault();
  const routeId = document.getElementById("order-route-select").value;
  const pkgType = document.getElementById("order-pkg-type").value;
  const weight = document.getElementById("order-weight").value;
  const tenure = document.getElementById("order-tenure").value;
  const errorMsg = document.getElementById("order-error-msg");
  errorMsg.style.display = "none";

  try {
    const res = await apiRequest("/orders", {
      method: "POST",
      body: JSON.stringify({
        route_id: routeId,
        package_type: pkgType,
        weight_kg: weight,
        tenure_months: tenure
      })
    });

    showToast(`Order ${res.order.order_number} berhasil dibuat!`);
    loadAPIOrders();
  } catch (err) {
    if (err.errors) {
      const messages = Object.values(err.errors).flat().join(" ");
      errorMsg.textContent = messages;
    } else {
      errorMsg.textContent = err.message || "Gagal membuat order.";
    }
    errorMsg.style.display = "block";
  }
});

// Load Orders List
async function loadAPIOrders() {
  const tbody = document.getElementById("orders-table-body");
  tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-secondary);">Memuat data pesanan...</td></tr>';

  try {
    const res = await apiRequest("/orders", { method: "GET" });
    const orders = res.data || [];

    if (orders.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-secondary);">Belum ada pesanan dispatch.</td></tr>';
      return;
    }

    tbody.innerHTML = "";
    orders.forEach(o => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${o.order_number}</strong></td>
        <td>${o.origin_name || "-"} ➔ ${o.destination_name || "-"}</td>
        <td>${o.weight_kg} kg</td>
        <td><strong>Rp ${parseFloat(o.total_cost).toLocaleString("id-ID")}</strong></td>
        <td>${o.tenure_months > 1 ? `Rp ${parseFloat(o.monthly_installment).toLocaleString("id-ID")} x ${o.tenure_months}bln` : "Lunas 1x"}</td>
        <td><span class="badge-status ${o.status}">${o.status}</span></td>
        <td>
          <button type="button" class="btn-ctrl btn-sm" onclick="switchSPATab('map'); showToast('Melihat rute order ${o.order_number} di peta');">Peta</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #ef4444;">Gagal memuat pesanan: ${err.message}</td></tr>`;
  }
}

document.getElementById("btn-refresh-orders").addEventListener("click", loadAPIOrders);

