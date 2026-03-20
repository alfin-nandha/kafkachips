'use client';

import { useEffect, useMemo, useState } from 'react';
import { marketplaces, newsData, productData, whatsappByProduct } from '@/lib/data';

const navItems = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Produk', href: '#produk' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Ulasan', href: '#ulasan' },
  { label: 'Lokasi', href: '#lokasi' }
];

const testimonials = [
  {
    name: 'Sari Rahayu',
    city: 'Jakarta',
    text: 'Keripik nangkanya enak banget. Renyah, manis alami, dan konsisten kualitasnya.'
  },
  {
    name: 'Budi Darmawan',
    city: 'Surabaya',
    text: 'Pisang stiknya jadi favorit anak-anak. Pengiriman juga cepat dan aman.'
  },
  {
    name: 'Anisa Lestari',
    city: 'Bandung',
    text: 'Rambak pisangnya unik dan tidak berminyak. Selalu repeat order.'
  }
];

const whyItems = [
  {
    icon: '🌿',
    title: '100% Bahan Alami',
    desc: 'Semua bahan baku dipilih langsung dari petani lokal Indonesia, segar dan bebas bahan kimia berbahaya.'
  },
  {
    icon: '🚫',
    title: 'Tanpa Pengawet',
    desc: 'Kami tidak menggunakan pengawet atau pewarna buatan. Kelezatan murni dari alam untuk keluarga Anda.'
  },
  {
    icon: '🏅',
    title: 'Kualitas Premium',
    desc: 'Proses produksi higienis dengan standar kualitas tinggi. Setiap batch diperiksa sebelum dikemas.'
  },
  {
    icon: '🍯',
    title: 'Tanpa Tambahan Pemanis',
    desc: 'Rasa manis alami murni didapatkan langsung dari buah-buahan segar kualitas terbaik tanpa tambahan gula atau pemanis buatan.'
  },
  {
    icon: '🚚',
    title: 'Pengiriman Cepat',
    desc: 'Pengiriman ke seluruh Indonesia melalui berbagai ekspedisi terpercaya. Order pagi, proses hari ini.'
  },
  {
    icon: '💬',
    title: 'Layanan Ramah',
    desc: 'Tim kami siap membantu pertanyaan dan komplain Anda. Kepuasan pelanggan adalah prioritas utama kami.'
  }
];

function IconButtonLabel({ src, alt, label }) {
  return (
    <>
      <img src={src} alt={alt} className="h-4 w-4 object-contain" />
      <span>{label}</span>
    </>
  );
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState('semua');
  const [activeProduct, setActiveProduct] = useState(null);
  const [productSlide, setProductSlide] = useState(0);
  const [activeNews, setActiveNews] = useState(null);
  const [newsSlide, setNewsSlide] = useState(0);

  const filteredProducts = useMemo(() => {
    if (filter === 'semua') return productData;
    return productData.filter((p) => p.categoryKey === filter);
  }, [filter]);

  useEffect(() => {
    setMounted(true);
    const currentTheme = localStorage.getItem('kafkachips-theme');
    const shouldDark = currentTheme === 'dark';
    setDark(shouldDark);
    document.documentElement.classList.toggle('dark', shouldDark);

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('kafkachips-theme', dark ? 'dark' : 'light');
  }, [dark, mounted]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveProduct(null);
        setActiveNews(null);
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeProduct || activeNews ? 'hidden' : '';
  }, [activeNews, activeProduct]);

  const openProduct = (product) => {
    setActiveProduct(product);
    setProductSlide(0);
  };

  const openNews = (news) => {
    setActiveNews(news);
    setNewsSlide(0);
  };

  return (
    <main className="overflow-x-hidden bg-brand-bg text-brand-text dark:bg-stone-950 dark:text-amber-50">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all ${
          scrolled
            ? 'border-b border-amber-300/30 bg-brand-bg/95 py-3 backdrop-blur dark:border-amber-700/30 dark:bg-stone-950/90'
            : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#beranda" className="font-display text-2xl font-black">
            Kafka<span className="text-brand-gold">Chips</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-brand-muted transition hover:text-brand-text dark:hover:text-amber-50">
                {item.label}
              </a>
            ))}
            <a href="#produk" className="rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-white">
              Beli Sekarang
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle tema"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-white text-sm dark:border-amber-700 dark:bg-stone-900"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-200" fill="currentColor" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-500" fill="currentColor" aria-hidden="true">
                  <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1zm10-8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2M4 12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h2m13.66 6.24a1 1 0 0 1 1.41 0l1.42 1.41a1 1 0 1 1-1.42 1.42l-1.41-1.42a1 1 0 0 1 0-1.41M5.51 4.1a1 1 0 0 1 1.41 0l1.42 1.41A1 1 0 0 1 6.93 6.93L5.51 5.51a1 1 0 0 1 0-1.41m14.98 1.41a1 1 0 0 1 0 1.42l-1.42 1.41a1 1 0 1 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0M8.34 17.66a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="lg:hidden"
              aria-label="Menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="mt-1 block h-0.5 w-5 bg-current" />
              <span className="mt-1 block h-0.5 w-5 bg-current" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-4 space-y-5 border-t border-amber-300/30 bg-brand-bg/95 px-6 py-6 lg:hidden dark:border-amber-700/30 dark:bg-stone-950/95">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="beranda" className="relative pb-20 pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_35%,rgba(196,123,26,0.15),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-gold">Produk unggulan Malang</p>
            <h1 className="font-display text-5xl font-black leading-tight md:text-6xl">
              Keripik Premium
              <br />
              <span className="text-brand-gold">Berkualitas Tinggi</span>
            </h1>
            <p className="mt-6 max-w-xl text-brand-muted dark:text-amber-200/80">
              Dibuat dari bahan pilihan Indonesia tanpa pengawet. Rasa autentik yang renyah dan konsisten di setiap gigitan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produk" className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-white">
                Lihat Katalog
              </a>
              <a href="#tentang" className="rounded-full border border-amber-300/60 px-6 py-3 text-sm font-semibold">
                Tentang Kami
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-gold">500+</p>
                <p className="text-brand-muted">Pelanggan puas</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-gold">4</p>
                <p className="text-brand-muted">Varian produk</p>
              </div>
              <div>
                <p className="font-display text-3xl font-extrabold text-brand-gold">4.9</p>
                <p className="text-brand-muted">Rating rata-rata</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <img src="/assets/all.webp" alt="Produk KafkaChips" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-4 bottom-8 rounded-2xl border border-amber-300/40 bg-white px-4 py-2 text-xs font-semibold shadow-card dark:border-amber-700/40 dark:bg-stone-900">
              Rating Tokopedia 4.9
            </div>
            <div className="absolute -right-4 top-6 rounded-2xl border border-amber-300/40 bg-white px-4 py-2 text-xs font-semibold shadow-card dark:border-amber-700/40 dark:bg-stone-900">
              Produk Asli Malang
            </div>
          </div>
        </div>
      </section>

      <section id="tentang" className="section-shell bg-brand-bg2 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="card overflow-hidden">
            <img src="/assets/all.webp" alt="Tentang KafkaChips" className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="badge">Tentang Kami</span>
            <h2 className="section-title mt-4">Camilan autentik dari <span>Kota Malang</span></h2>
            <p className="mt-5 text-brand-muted dark:text-amber-200/80">
              KafkaChips memproduksi keripik premium berbahan baku pilihan, diproses higienis tanpa pengawet dan tanpa pewarna buatan.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="card px-5 py-4">100% bahan alami dari Indonesia.</div>
              <div className="card px-5 py-4">Produksi higienis dan konsisten.</div>
              <div className="card px-5 py-4">Pengiriman ke seluruh Indonesia.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="produk" className="section-shell">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="badge">Katalog Produk</span>
            <h2 className="section-title mt-4">Semua produk <span>KafkaChips</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted dark:text-amber-200/80">
              Klik produk untuk melihat detail lengkap dan foto.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              ['semua', 'Semua'],
              ['nangka', 'Nangka'],
              ['salak', 'Salak'],
              ['rambak', 'Rambak Pisang'],
              ['pisang', 'Pisang Stik']
            ].map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  filter === key
                    ? 'border-brand-gold bg-brand-gold text-white'
                    : 'border-amber-300/50 bg-white text-brand-muted dark:border-amber-700 dark:bg-stone-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <button
                type="button"
                key={product.id}
                className="card overflow-hidden text-left transition hover:-translate-y-1"
                onClick={() => openProduct(product)}
              >
                <div className="relative aspect-[4/3]">
                  <img src={product.photos[0]} alt={product.name} className="h-full w-full object-cover" />
                  {product.badge && (
                    <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white ${product.badgeClass}`}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.1em] text-brand-gold">{product.category}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{product.name}</h3>
                  <p className="mt-2 text-sm text-brand-muted dark:text-amber-200/80">{product.desc}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-amber-300/40 pt-4 text-sm">
                    <div>
                      <p className="font-display font-bold text-brand-gold">{product.price}</p>
                      <p className="text-brand-muted">{product.weight}</p>
                    </div>
                    <span className="rounded-full bg-brand-gold px-3 py-2 text-xs font-bold text-white">Beli</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="keunggulan" className="section-shell bg-brand-bg2 dark:bg-stone-900/40">
        <div className="mx-auto max-w-6xl px-6">
          <span className="badge">✦ Kenapa KafkaChips?</span>
          <h2 className="section-title mt-4">Keunggulan yang kami <span>tawarkan</span></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="card rounded-[1.8rem] bg-zinc-100 p-8 text-center dark:bg-stone-800">
                <div className="mb-5 text-5xl">{item.icon}</div>
                <h3 className="font-display text-3xl font-extrabold text-zinc-900 dark:text-amber-50">{item.title}</h3>
                <p className="mt-4 text-[1.1rem] leading-9 text-brand-muted dark:text-amber-200/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ulasan" className="section-shell">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="badge">Ulasan Pelanggan</span>
            <h2 className="section-title mt-4">Apa kata <span>mereka</span></h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card p-6">
                <p className="text-sm text-brand-muted dark:text-amber-200/80">"{item.text}"</p>
                <p className="mt-5 font-display text-sm font-bold">{item.name}</p>
                <p className="text-xs text-brand-muted">{item.city}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="berita" className="section-shell">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="badge">Update Terbaru</span>
            <h2 className="section-title mt-4">Berita dan <span>promo</span></h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {newsData.map((news) => (
              <button
                type="button"
                key={news.title}
                className="card overflow-hidden text-left transition hover:-translate-y-1"
                onClick={() => openNews(news)}
              >
                <div className="aspect-video">
                  <img src={news.image} alt={news.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold">{news.date}</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{news.title}</h3>
                  <p className="mt-2 text-sm text-brand-muted dark:text-amber-200/80">{news.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-amber-300/40 bg-gradient-to-r from-amber-100/80 to-orange-100/70 p-10 text-center dark:border-amber-700/40 dark:from-amber-900/30 dark:to-orange-900/20">
            <span className="badge">Beli Sekarang</span>
            <h2 className="section-title mt-4">Siap memesan <span>KafkaChips</span>?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-muted dark:text-amber-200/80">
              Tersedia di marketplace favorit Anda.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold">
              <a className="inline-flex items-center gap-2 rounded-full bg-[#ee4d2d] px-5 py-3 text-white" href={marketplaces.shopee} target="_blank" rel="noreferrer">
                <IconButtonLabel src="/assets/shopee.webp" alt="Shopee" label="Shopee" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-full bg-[#00aa5b] px-5 py-3 text-white" href={marketplaces.tokopedia} target="_blank" rel="noreferrer">
                <IconButtonLabel src="/assets/tokopedia.webp" alt="Tokopedia" label="Tokopedia" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white" href={marketplaces.tiktok} target="_blank" rel="noreferrer">
                <IconButtonLabel src="/assets/tiktok.webp" alt="TikTok" label="TikTok Shop" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white" href={marketplaces.whatsapp} target="_blank" rel="noreferrer">
                <IconButtonLabel src="/assets/wa.webp" alt="WhatsApp" label="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="lokasi" className="section-shell bg-brand-bg2 dark:bg-stone-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
          <iframe
            title="Lokasi KafkaChips"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7!2d112.8395142!3d-8.2514394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd61114fe3c60d5%3A0x6b3fa9a0bcbdd76!2sDutaChips!5e0!3m2!1sid!2sid!4v1234567890"
            className="card min-h-[380px] w-full"
            loading="lazy"
          />
          <div className="space-y-4">
            <h2 className="section-title">Temukan kami di <span>Malang</span></h2>
            <div className="card p-5 text-sm">RT.01/RW.01, Sumbermanggis, Jogomulyo, Kec. Tirtoyudo, Kabupaten Malang, Jawa Timur 65182</div>
            <div className="card p-5 text-sm">
              Telepon/WhatsApp:{' '}
              <a className="font-semibold text-brand-gold" href={marketplaces.whatsapp} target="_blank" rel="noreferrer">
                0823-0204-6403
              </a>
            </div>
            <div className="card p-5 text-sm">Senin-Sabtu 08:00-20:00 WIB, Minggu 09:00-17:00 WIB</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-300/40 bg-brand-bg2 py-12 text-sm dark:border-amber-700/40 dark:bg-stone-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:justify-between">
          <div>
            <p className="font-display text-2xl font-black">
              Kafka<span className="text-brand-gold">Chips</span>
            </p>
            <p className="mt-3 max-w-sm text-brand-muted">Keripik premium berkualitas tinggi khas Malang.</p>
          </div>
          <div className="space-y-2 text-brand-muted">
            <a href="#beranda" className="block">
              Beranda
            </a>
            <a href="#produk" className="block">
              Produk
            </a>
            <a href="#lokasi" className="block">
              Lokasi
            </a>
          </div>
          <div className="space-y-2 text-brand-muted">
            <a href={marketplaces.shopee} target="_blank" rel="noreferrer" className="block">
              Shopee
            </a>
            <a href={marketplaces.tokopedia} target="_blank" rel="noreferrer" className="block">
              Tokopedia
            </a>
            <a href={marketplaces.whatsapp} target="_blank" rel="noreferrer" className="block">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {activeProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={() => setActiveProduct(null)}>
          <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white dark:bg-stone-900 md:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <img
                src={activeProduct.photos[productSlide]}
                alt={activeProduct.name}
                className="h-full min-h-[320px] w-full object-cover"
              />
              {activeProduct.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 rounded-full bg-white/80 px-3 py-2 text-sm"
                    onClick={() =>
                      setProductSlide((value) => (value - 1 + activeProduct.photos.length) % activeProduct.photos.length)
                    }
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 rounded-full bg-white/80 px-3 py-2 text-sm"
                    onClick={() => setProductSlide((value) => (value + 1) % activeProduct.photos.length)}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-brand-gold">{activeProduct.category}</p>
              <h3 className="mt-2 font-display text-3xl font-extrabold">{activeProduct.name}</h3>
              <p className="mt-4 text-sm text-brand-muted dark:text-amber-200/80">{activeProduct.fullDesc}</p>
              <p className="mt-5 font-display text-2xl font-bold text-brand-gold">{activeProduct.price}</p>
              <p className="text-sm text-brand-muted">{activeProduct.weight}</p>
              <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-bold">
                <a href={marketplaces.shopee} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ee4d2d] px-4 py-2 text-center text-white">
                  <IconButtonLabel src="/assets/shopee.webp" alt="Shopee" label="Shopee" />
                </a>
                <a href={marketplaces.tokopedia} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00aa5b] px-4 py-2 text-center text-white">
                  <IconButtonLabel src="/assets/tokopedia.webp" alt="Tokopedia" label="Tokopedia" />
                </a>
                <a href={marketplaces.tiktok} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-4 py-2 text-center text-white">
                  <IconButtonLabel src="/assets/tiktok.webp" alt="TikTok" label="TikTok" />
                </a>
                <a
                  href={whatsappByProduct[activeProduct.id] || marketplaces.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-center text-white"
                >
                  <IconButtonLabel src="/assets/wa.webp" alt="WhatsApp" label="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeNews && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={() => setActiveNews(null)}>
          <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white dark:bg-stone-900 md:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <div className="relative">
              <img src={activeNews.photos[newsSlide]} alt={activeNews.title} className="h-full min-h-[300px] w-full object-cover" />
              {activeNews.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 rounded-full bg-white/80 px-3 py-2 text-sm"
                    onClick={() => setNewsSlide((value) => (value - 1 + activeNews.photos.length) % activeNews.photos.length)}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 rounded-full bg-white/80 px-3 py-2 text-sm"
                    onClick={() => setNewsSlide((value) => (value + 1) % activeNews.photos.length)}
                  >
                    Next
                  </button>
                </>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-brand-gold">{activeNews.date}</p>
              <h3 className="mt-2 font-display text-3xl font-extrabold">{activeNews.title}</h3>
              <p className="mt-4 text-sm text-brand-muted dark:text-amber-200/80">{activeNews.fullDesc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

