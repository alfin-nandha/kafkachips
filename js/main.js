// =========================================
// KafkaChips - Main JavaScript
// =========================================

// ----- Product Data -----
const productData = {
  nangka: {
    name: 'Keripik Nangka',
    category: 'Keripik Nangka',
    desc: 'Keripik kualitas No. 1, 100% organik, tanpa bahan pengawet dan tanpa tambahan gula atau pemanis buatan. Terbuat dari buah nangka segar pilihan dari petani yang dikupas dan dibekukan untuk menjaga kualitasnya. Digoreng dengan metode vacuum frying dan ditiriskan menggunakan spinner agar tetap renyah tanpa minyak berlebih. Diproduksi sendiri dengan pengalaman lebih dari 5 tahun.',
    price: 'Rp 135.000 / kg',
    weight: 'Tersedia Kemasan 250g, 500g',
    rating: '4.9',
    sold: '639',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    tokpedUrl: 'https://www.tokopedia.com/dutachips',
    tiktokUrl: 'https://www.tiktok.com/@kafkachips',
    waUrl: 'https://wa.me/62082302046403?text=Halo%20KafkaChips,%20saya%20ingin%20memesan%20Keripik%20Nangka',
    photos: [
      'assets/nangka_0.webp',
      'assets/nangka_1.webp',
      'assets/nangka_2.webp',
      'assets/nangka_3.webp',
      'assets/nangka_4.webp',
    ]
  },
  salak: {
    name: 'Keripik Salak',
    category: 'Keripik Salak',
    desc: 'Keripik kualitas No. 1, 100% organik, tanpa bahan pengawet dan tanpa tambahan gula atau pemanis buatan. Terbuat dari buah salak segar dari petani yang dikupas dan dibekukan untuk menjaga kualitasnya. Digoreng dengan metode vacuum frying dan ditiriskan menggunakan spinner agar tetap renyah tanpa minyak berlebih. Diproduksi sendiri dengan pengalaman lebih dari 5 tahun.',
    price: 'Rp 95.000 / kg',
    weight: 'Tersedia Kemasan 250g, 500g',
    rating: '4.9',
    sold: '287',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    tokpedUrl: 'https://www.tokopedia.com/dutachips',
    tiktokUrl: 'https://www.tiktok.com/@kafkachips',
    waUrl: 'https://wa.me/62082302046403?text=Halo%20KafkaChips,%20saya%20ingin%20memesan%20Keripik%20Salak',
    photos: [
      'assets/salak_0.webp',
      'assets/salak_1.webp',
      'assets/salak_2.webp',
      'assets/salak_3.webp',
      'assets/salak_4.webp',
    ]
  },
  rambak_pisang: {
    name: 'Rambak Pisang',
    category: 'Rambak Pisang',
    desc: 'Keripik kualitas No. 1, 100% organik, tanpa bahan pengawet dan tanpa tambahan gula atau pemanis buatan. Terbuat dari buah Pisang Rojo Awak segar pilihan dari petani yang dikupas dan dibekukan untuk menjaga kualitasnya. Digoreng dengan metode vacuum frying dan ditiriskan menggunakan spinner agar tetap renyah tanpa minyak berlebih. Diproduksi sendiri dengan pengalaman lebih dari 5 tahun.',
    price: 'Rp 80.000 / kg',
    weight: 'Tersedia Kemasan 250g, 500g',
    rating: '5.0',
    sold: '241',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    tokpedUrl: 'https://www.tokopedia.com/dutachips',
    tiktokUrl: 'https://www.tiktok.com/@kafkachips',
    waUrl: 'https://wa.me/62082302046403?text=Halo%20KafkaChips,%20saya%20ingin%20memesan%20Rambak%20Pisang',
    photos: [
      'assets/rambak_pisang_0.webp',
      'assets/rambak_pisang_1.webp',
      'assets/rambak_pisang_2.webp',
      'assets/rambak_pisang_3.webp',
      'assets/rambak_pisang_4.webp',
    ]
  },
  pisang_stik: {
    name: 'Pisang Stik',
    category: 'Pisang Stik',
    desc: 'Keripik kualitas No. 1, 100% organik, tanpa bahan pengawet dan tanpa tambahan gula atau pemanis buatan. Terbuat dari buah Pisang mas segar dari petani. Digoreng dengan metode vacuum frying dan ditiriskan menggunakan spinner agar tetap renyah tanpa minyak berlebih. Diproduksi sendiri dengan pengalaman lebih dari 5 tahun.',
    price: 'Rp 75.000 / kg',
    weight: 'Tersedia Kemasan 250g, 500g',
    rating: '4.8',
    sold: '125',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    tokpedUrl: 'https://www.tokopedia.com/dutachips',
    tiktokUrl: 'https://www.tiktok.com/@kafkachips',
    waUrl: 'https://wa.me/62082302046403?text=Halo%20KafkaChips,%20saya%20ingin%20memesan%20Pisang%20Stik',
    photos: [
      'assets/pisang_stik_0.webp',
      'assets/pisang_stik_1.webp',
      'assets/pisang_stik_2.webp',
      'assets/pisang_stik_3.webp',
      'assets/pisang_stik_4.webp',
    ]
  }
};

// ----- News & Promo Data -----
// ANDA BISA MENGELOLA KONTEN DI SINI
const newsData = [
  {
    title: 'Peralatan yang Dipakai',
    date: '10 Maret 2025',
    desc: 'Kami menggunakan peralatan modern untuk memastikan kualitas dan kehigienisan keripik buah.',
    fullDesc: 'Proses produksi KafkaChips menggunakan mesin modern seperti Vacuum Frying dan Spinner. Mesin Vacuum Frying menggoreng buah pada suhu rendah sehingga nutrisi dan warnanya tetap terjaga. Setelah itu, mesin Spinner akan meniriskan minyak hingga tuntas, menjadikan keripik kami sangat renyah, sehat, dan tidak berminyak.',
    image: 'assets/vacuum_frying.webp',
    photos: [
      'assets/vacuum_frying.webp',
      'assets/spinner.webp'
    ]
  },
  {
    title: 'Kunjungan Bupati Malang',
    date: '15 Maret 2025',
    desc: 'Kunjungi booth kami di Malang Expo 2025. Ada banyak promo menarik dan free tester!',
    fullDesc: 'Kunjungi booth kami di Malang Expo 2025. Ada banyak promo menarik dan free tester!',
    image: 'assets/all.webp',
    photos: ['assets/all.webp']
  }
];

// ----- Theme Toggle -----
const themeToggle = document.getElementById('themeToggle');
if (localStorage.getItem('kafkachips-theme') === 'dark') {
  document.body.classList.add('dark');
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('kafkachips-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// ----- Navbar Scroll -----
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ----- Mobile Menu -----
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => document.body.classList.toggle('nav-mobile-open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => document.body.classList.remove('nav-mobile-open'));
});

// ----- Scroll Reveal -----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ----- Product Filter -----
const filterTabs = document.querySelectorAll('.filter-tab');
const productCards = document.querySelectorAll('.product-card');
filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    productCards.forEach(card => {
      const show = filter === 'semua' || card.dataset.category === filter;
      if (show) {
        card.style.display = 'flex';
        requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => { card.style.display = 'none'; }, 280);
      }
    });
  });
});

// ----- News Loader -----
function loadNews() {
  const newsGrid = document.getElementById('newsGrid');
  if (!newsGrid) return;

  newsGrid.innerHTML = newsData.map((item, index) => `
    <div class="news-card reveal reveal-delay-${index % 3}" data-news-index="${index}" style="cursor: pointer;">
      <div class="news-img" style="position: relative;">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="news-img-overlay"><span>🔍 Baca Selengkapnya</span></div>
      </div>
      <div class="news-body">
        <div class="news-date">${item.date}</div>
        <h3 class="news-title">${item.title}</h3>
        <p class="news-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');

  // Re-observe new elements for reveal animation
  newsGrid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  bindNewsClick();
}

// ----- Counter Animation -----
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + (el.dataset.suffix || ''); clearInterval(timer); }
    else { el.textContent = Math.floor(start) + (el.dataset.suffix || ''); }
  }, 16);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number[data-count]').forEach(el => animateCounter(el, parseInt(el.dataset.count)));
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);

// =========================================
// PRODUCT MODAL + CAROUSEL
// =========================================
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const modalCategory = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalRating = document.getElementById('modalRating');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWeight = document.getElementById('modalWeight');

// Multi-buy buttons
const modalBuyShopee = document.getElementById('modalBuyShopee');
const modalBuyTokped = document.getElementById('modalBuyTokped');
const modalBuyTiktok = document.getElementById('modalBuyTiktok');
const modalBuyWA = document.getElementById('modalBuyWA');

let currentSlide = 0;
let totalSlides = 0;

function goToSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function openModal(productId) {
  const p = productData[productId];
  if (!p) return;

  // Populate info
  modalCategory.textContent = p.category;
  modalName.textContent = p.name;
  modalRating.innerHTML = `<span class="stars">★★★★★</span> <span>${p.rating} (${p.sold} terjual)</span>`;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = p.price;
  modalWeight.textContent = p.weight;

  // Set marketplace links
  if (modalBuyShopee) modalBuyShopee.href = p.shopeeUrl;
  if (modalBuyTokped) modalBuyTokped.href = p.tokpedUrl;
  if (modalBuyTiktok) modalBuyTiktok.href = p.tiktokUrl;
  if (modalBuyWA) modalBuyWA.href = p.waUrl;

  // Build carousel
  totalSlides = p.photos.length;
  currentSlide = 0;
  carouselTrack.innerHTML = p.photos.map((src, i) =>
    `<div class="carousel-slide"><img src="${src}" alt="${p.name} foto ${i + 1}" loading="lazy" /></div>`
  ).join('');
  carouselDots.innerHTML = p.photos.map((_, i) =>
    `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Foto ${i + 1}"></button>`
  ).join('');
  document.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });

  goToSlide(0);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Open modal on card click
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.productId;
    if (id) openModal(id);
  });
});

// Carousel controls
carouselPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
carouselNext.addEventListener('click', () => goToSlide(currentSlide + 1));

// Close modal
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Swipe support (touch)
let touchStartX = 0;
carouselTrack.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
carouselTrack.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
});

// =========================================
// NEWS MODAL LOGIC
// =========================================
const newsModalOverlay = document.getElementById('newsModalOverlay');
const newsModalClose = document.getElementById('newsModalClose');
const newsCarouselTrack = document.getElementById('newsCarouselTrack');
const newsCarouselDots = document.getElementById('newsCarouselDots');
const newsCarouselPrev = document.getElementById('newsCarouselPrev');
const newsCarouselNext = document.getElementById('newsCarouselNext');
const newsModalDate = document.getElementById('newsModalDate');
const newsModalTitle = document.getElementById('newsModalTitle');
const newsModalDesc = document.getElementById('newsModalDesc');

let newsCurrentSlide = 0;
let newsTotalSlides = 0;

function goToNewsSlide(index) {
  newsCurrentSlide = (index + newsTotalSlides) % newsTotalSlides;
  newsCarouselTrack.style.transform = `translateX(-${newsCurrentSlide * 100}%)`;
  document.querySelectorAll('#newsModalOverlay .carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === newsCurrentSlide);
  });
}

function openNewsModal(index) {
  const n = newsData[index];
  if (!n) return;

  newsModalDate.textContent = n.date;
  newsModalTitle.textContent = n.title;
  newsModalDesc.textContent = n.fullDesc || n.desc;

  newsTotalSlides = n.photos.length;
  newsCurrentSlide = 0;
  newsCarouselTrack.innerHTML = n.photos.map((src, i) =>
    `<div class="carousel-slide"><img src="${src}" alt="${n.title} foto ${i + 1}" loading="lazy" /></div>`
  ).join('');

  if (newsTotalSlides > 1) {
    newsCarouselPrev.style.display = 'flex';
    newsCarouselNext.style.display = 'flex';
    newsCarouselDots.innerHTML = n.photos.map((_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Foto ${i + 1}"></button>`
    ).join('');
  } else {
    newsCarouselPrev.style.display = 'none';
    newsCarouselNext.style.display = 'none';
    newsCarouselDots.innerHTML = '';
  }

  document.querySelectorAll('#newsModalOverlay .carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToNewsSlide(parseInt(dot.dataset.index)));
  });

  goToNewsSlide(0);
  newsModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNewsModal() {
  newsModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function bindNewsClick() {
  document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', () => {
      const index = card.dataset.newsIndex;
      if (index !== undefined) openNewsModal(index);
    });
  });
}

newsCarouselPrev.addEventListener('click', () => goToNewsSlide(newsCurrentSlide - 1));
newsCarouselNext.addEventListener('click', () => goToNewsSlide(newsCurrentSlide + 1));
newsModalClose.addEventListener('click', closeNewsModal);
newsModalOverlay.addEventListener('click', (e) => { if (e.target === newsModalOverlay) closeNewsModal(); });

let newsTouchStartX = 0;
newsCarouselTrack.addEventListener('touchstart', (e) => { newsTouchStartX = e.touches[0].clientX; }, { passive: true });
newsCarouselTrack.addEventListener('touchend', (e) => {
  const diff = newsTouchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goToNewsSlide(diff > 0 ? newsCurrentSlide + 1 : newsCurrentSlide - 1);
});

// Initialize news
document.addEventListener('DOMContentLoaded', loadNews);
