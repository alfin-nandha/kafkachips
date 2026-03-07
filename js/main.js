// =========================================
// KafkaChips - Main JavaScript
// =========================================

// ----- Product Data -----
const productData = {
  nangka: {
    name: 'Keripik Nangka',
    category: 'Keripik Nangka',
    desc: 'Potongan nangka renyah dengan rasa manis alami khas buah nangka pilihan langsung dari kebun Malang. Digoreng dengan teknik sempurna tanpa minyak berlebih, menghasilkan tekstur crispy yang tahan lama. Tanpa pengawet, tanpa pewarna buatan.',
    price: 'Rp 25.000',
    weight: '100 gram',
    rating: '4.9',
    sold: '639',
    shopeeUrl: 'https://shopee.co.id/dutachips',
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
    desc: 'Irisan tipis buah salak pilihan yang diproses dan digoreng hingga renyah sempurna. Menghadirkan rasa unik asam-manis yang khas dari buah salak segar berkualitas tinggi. Cocok untuk camilan sehari-hari maupun oleh-oleh khas Malang.',
    price: 'Rp 28.000',
    weight: '100 gram',
    rating: '4.9',
    sold: '287',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    photos: [
      'assets/salak_0.webp',
      'assets/salak_1.webp',
      'assets/salak_2.webp',
      'assets/salak_3.webp',
      'assets/salak_4.webp',
    ]
  },
  pisang_stik: {
    name: 'Pisang Stik',
    category: 'Pisang Stik',
    desc: 'Stik pisang renyah yang dibuat dari pisang pilihan berkualitas tinggi. Diproses secara higienis menghasilkan rasa manis gurih alami yang disukai semua usia. Camilan favorit anak-anak dan seluruh keluarga yang bikin ketagihan.',
    price: 'Rp 20.000',
    weight: '150 gram',
    rating: '4.8',
    sold: '520',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    photos: [
      'assets/pisang_stik_0.webp',
      'assets/pisang_stik_1.webp',
      'assets/pisang_stik_2.webp',
      'assets/pisang_stik_3.webp',
      'assets/pisang_stik_4.webp',
    ]
  },
  rambak_pisang: {
    name: 'Rambak Pisang',
    category: 'Rambak Pisang',
    desc: 'Rambak khas Malang yang dibuat dari kulit pisang pilihan, digoreng hingga kriuk sempurna dengan bumbu tradisional yang autentik. Camilan unik yang langka dan lezat — perpaduan tekstur renyah dan rasa gurih yang tak terlupakan.',
    price: 'Rp 22.000',
    weight: '100 gram',
    rating: '5.0',
    sold: '198',
    shopeeUrl: 'https://shopee.co.id/dutachips',
    photos: [
      'assets/rambak_pisang_0.webp',
      'assets/rambak_pisang_1.webp',
      'assets/rambak_pisang_2.webp',
      'assets/rambak_pisang_3.webp',
      'assets/rambak_pisang_4.webp',
    ]
  }
};

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
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots  = document.getElementById('carouselDots');
const carouselPrev  = document.getElementById('carouselPrev');
const carouselNext  = document.getElementById('carouselNext');
const modalCategory = document.getElementById('modalCategory');
const modalName     = document.getElementById('modalName');
const modalRating   = document.getElementById('modalRating');
const modalDesc     = document.getElementById('modalDesc');
const modalPrice    = document.getElementById('modalPrice');
const modalWeight   = document.getElementById('modalWeight');
const modalBuyBtn   = document.getElementById('modalBuyBtn');

let currentSlide = 0;
let totalSlides  = 0;

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
  modalName.textContent     = p.name;
  modalRating.innerHTML     = `<span class="stars">★★★★★</span> <span>${p.rating} (${p.sold} terjual)</span>`;
  modalDesc.textContent     = p.desc;
  modalPrice.textContent    = p.price;
  modalWeight.textContent   = p.weight;
  modalBuyBtn.href          = p.shopeeUrl;

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
