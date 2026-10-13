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
