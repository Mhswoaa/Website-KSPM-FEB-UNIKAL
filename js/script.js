if (typeof tailwind !== "undefined") {
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          serif: ['"Playfair Display"', "Georgia", "serif"],
          sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        },
        colors: {
          burgundy: {
            950: "#1A0007",
            900: "#26000A",
            800: "#3D0010",
            700: "#520015",
            600: "#69001A",
            500: "#800020",
          },
          carrot: {
            DEFAULT: "#FF4500",
            soft: "#FF6A33",
          },
          gold: {
            DEFAULT: "#FFD700",
            warm: "#E6B800",
          },
          cream: {
            50: "#FAF6F0",
            100: "#F4ECE1",
            200: "#F2E8DC",
            300: "#E8DAC8",
          },
        },
      },
    },
  };
}

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /**
   * 1. DATA STATIS AKTIVITAS & GALERI (Mudah dikelola oleh satu pengelola)
   */
  const ACTIVITIES_LIST = [
    {
      id: "spm",
      tag: "Program Edukasi Utama",
      title: "Sekolah Pasar Modal",
      subtitle: "Edukasi Berjenjang Investasi Saham",
      description:
        "Program edukasi resmi yang membekali peserta dengan pemahaman komprehensif mengenai mekanisme perdagangan efek, analisis fundamental, analisis teknikal, hingga praktik pembukaan rekening efek.",
      icon: "graduation-cap",
    },
    {
      id: "stocklab",
      tag: "Simulasi & Strategi",
      title: "Stocklab Competition",
      subtitle: "Kompetisi Simulasi Permainan Pasar Modal",
      description:
        "Ajang kompetisi berbasis simulasi perdagangan saham interaktif yang mengasah ketajaman pengambilan keputusan investasi, manajemen risiko, dan pemahaman dinamika pasar secara menyenangkan.",
      icon: "layers",
    },
    {
      id: "cmc",
      tag: "Kompetisi Analisis",
      title: "Capital Market Competition",
      subtitle: "Kompetisi Riset & Analisis Ekuitas",
      description:
        "Kompetisi tingkat regional maupun nasional yang menantang mahasiswa untuk menyusun riset emiten, valuasi saham, serta strategi portofolio berbasis data pasar modal.",
      icon: "award",
    },
    {
      id: "podcast",
      tag: "Media Digital",
      title: "Podcast Cuan",
      subtitle: "Diskusi Santai & Insight Pasar Modal",
      description:
        "Kanal diskusi audio-visual yang membahas isu ekonomi terkini, fenomena pasar modal, psikologi investasi, serta obrolan inspiratif bersama praktisi dan akademisi.",
      icon: "mic",
    },
    {
      id: "seminar",
      tag: "Forum Akademik & Praktisi",
      title: "Seminar dan Workshop",
      subtitle: "Pendalaman Wawasan Industri Keuangan",
      description:
        "Forum ilmiah dan pelatihan praktis bersama regulator pasar modal, analis sekuritas, dan praktisi industri untuk menjembatani teori akademik dengan realitas pasar.",
      icon: "bar-chart-3",
    },
    {
      id: "edukasi",
      tag: "Pengabdian & Inklusi",
      title: "Edukasi Pasar Modal",
      subtitle: "Sosialisasi Literasi Keuangan Masyarakat",
      description:
        "Gerakan literasi dan inklusi keuangan berkelanjutan bagi pelajar, mahasiswa lintas fakultas, dan masyarakat umum guna mendorong investasi yang legal, logis, dan terukur.",
      icon: "compass",
    },
    {
      id: "oprec",
      tag: "Regenerasi Organisasi",
      title: "Open Recruitment",
      subtitle: "Penerimaan Anggota Baru KSPM",
      description:
        "Proses seleksi dan kaderisasi terbuka bagi mahasiswa Universitas Pekalongan yang memiliki minat tinggi untuk bertumbuh, belajar, dan berkontribusi di dunia pasar modal.",
      icon: "users",
    },
    {
      id: "kolaborasi",
      tag: "Kemitraan Strategis",
      title: "Kegiatan Kolaborasi",
      subtitle: "Sinergi Lintas Lembaga & Komunitas",
      description:
        "Program kerja sama strategis bersama Bursa Efek Indonesia, mitra sekuritas, himpunan mahasiswa, serta KSPM antarperguruan tinggi dalam memperluas ekosistem pasar modal.",
      icon: "briefcase",
    },
  ];

  const GALLERY_CATEGORIES = [
    "Semua",
    "Kegiatan Organisasi",
    "Seminar dan Workshop",
    "Kompetisi",
    "Sekolah Pasar Modal",
    "Kebersamaan Anggota",
    "Dokumentasi Lainnya",
  ];

  // Ganti properti `image` dengan path foto dokumentasi lokal (misal: ./assets/galeri-1.jpg)
  const GALLERY_ITEMS = [
    {
      id: 1,
      title: "Forum Seminar Nasional Pasar Modal",
      category: "Seminar dan Workshop",
      description:
        "Pemaparan wawasan industri keuangan dan proyeksi pasar modal Indonesia bersama narasumber praktisi dan akademisi di lingkungan Fakultas Ekonomi dan Bisnis Universitas Pekalongan.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Kelas Edukasi Sekolah Pasar Modal",
      category: "Sekolah Pasar Modal",
      description:
        "Sesi pembelajaran terstruktur mengenai dasar-dasar investasi saham, mekanisme bursa, serta pengenalan analisis laporan keuangan bagi mahasiswa.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      title: "Kompetisi Analisis & Simulasi Investasi",
      category: "Kompetisi",
      description:
        "Antusiasme peserta dalam menyusun strategi portofolio dan presentasi analisis emiten pada ajang kompetisi pasar modal KSPM FEB UNIKAL.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      title: "Rapat Koordinasi & Perencanaan Program",
      category: "Kegiatan Organisasi",
      description:
        "Sinergi internal anggota KSPM FEB UNIKAL dalam merancang program edukasi dan penguatan tata kelola organisasi yang profesional.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      title: "Solidaritas & Kebersamaan Keluarga KSPM",
      category: "Kebersamaan Anggota",
      description:
        "Momen kebersamaan yang mempererat ikatan kekeluargaan, kolaborasi tim, dan semangat bertumbuh bersama di KSPM FEB UNIKAL.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Workshop Analisis Teknikal & Fundamental",
      category: "Seminar dan Workshop",
      description:
        "Pelatihan praktik membaca grafik pergerakan harga saham dan mengevaluasi kinerja fundamental perusahaan tercatat.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      title: "Produksi Konten Edukasi Podcast Cuan",
      category: "Dokumentasi Lainnya",
      description:
        "Diskusi kreatif seputar literasi finansial dan dinamika pasar modal untuk menjangkau audiens mahasiswa secara digital.",
      image:
        "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 8,
      title: "Praktik Investasi Galeri Investasi BEI",
      category: "Sekolah Pasar Modal",
      description:
        "Pendampingan langsung pengenalan platform transaksi efek dan literasi pengelolaan risiko investasi bagi investor pemula.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  // State lokal
  let selectedCategory = "Semua";
  let currentFilteredGallery = [...GALLERY_ITEMS];
  let lightboxIndex = null;
  let isMobileMenuOpen = false;
  let touchStartX = 0;

  /**
   * Helper: Render ulang ikon Lucide secara aman
   */
  function refreshIcons() {
    try {
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    } catch (err) {
      console.error("Gagal menginisialisasi ikon Lucide:", err);
    }
  }

  /**
   * Helper: Penanganan gambar fallback tanpa inline onerror di HTML
   */
  function applyImageFallback(img) {
    const fallbackUrl = img.getAttribute("data-fallback");
    if (!fallbackUrl || img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";
    img.src = fallbackUrl;
  }

  function initImageFallbacks(root = document) {
    root.querySelectorAll("img[data-fallback]").forEach((img) => {
      img.addEventListener("error", () => applyImageFallback(img));
      if (img.complete && img.naturalWidth === 0) {
        applyImageFallback(img);
      }
    });
  }

  /**
   * 2. RENDER KARTU AKTIVITAS
   */
  function renderActivities() {
    const container = document.getElementById("activities-grid");
    if (!container) return;

    const cardClasses =
      "bg-[#3D0010]/90 border-[#FAF6F0]/12 hover:border-[#FF4500]/60 hover:bg-[#520015]";
    const badgeClasses =
      "bg-[#800020]/85 text-[#FFD700] border border-[#FF4500]/30";

    container.innerHTML = ACTIVITIES_LIST.map((activity) => {
      return `
        <article class="group relative rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${cardClasses}">
          <div>
            <div class="flex items-center justify-between gap-3 mb-6">
              <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] ${badgeClasses}">
                ${activity.tag}
              </span>
              <div class="w-10 h-10 rounded-xl bg-[#26000A]/75 border border-[#FFD700]/25 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#FF4500]/60 transition-all">
                <i data-lucide="${activity.icon}" class="w-5 h-5 text-[#FFD700]"></i>
              </div>
            </div>
            <h3 class="font-serif text-xl font-bold text-[#FAF6F0] group-hover:text-[#FFD700] transition-colors">
              ${activity.title}
            </h3>
            <p class="text-xs font-medium text-[#E6CED3] mt-1 mb-4">
              ${activity.subtitle}
            </p>
            <p class="text-sm text-[#F0DDE1]/90 leading-relaxed font-light">
              ${activity.description}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-[#FAF6F0]/10 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#D8BAC0]">
            <span>KSPM FEB UNIKAL</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#FF4500]"></span>
          </div>
        </article>
      `;
    }).join("");
  }

  /**
   * 3. RENDER FILTER & BENTO GRID GALERI + LIGHTBOX
   */
  function renderGalleryFilters() {
    const filterContainer = document.getElementById("gallery-filters");
    if (!filterContainer) return;

    filterContainer.innerHTML = GALLERY_CATEGORIES.map((category) => {
      const isSelected = selectedCategory === category;
      const btnClasses = isSelected
        ? "bg-[#800020] text-[#FFD700] shadow-md"
        : "bg-[#F4ECE1] text-[#4D2630] hover:bg-[#EADBC8] hover:text-[#800020]";

      return `
        <button
          type="button"
          data-gallery-category="${category}"
          role="tab"
          aria-selected="${isSelected}"
          class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${btnClasses}"
        >
          ${category}
        </button>
      `;
    }).join("");

    filterContainer
      .querySelectorAll("button[data-gallery-category]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          selectedCategory = btn.getAttribute("data-gallery-category");
          renderGalleryFilters();
          renderGalleryGrid();
        });
      });
  }

  function renderGalleryGrid() {
    const gridContainer = document.getElementById("gallery-grid");
    if (!gridContainer) return;

    currentFilteredGallery =
      selectedCategory === "Semua"
        ? [...GALLERY_ITEMS]
        : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

    gridContainer.innerHTML = currentFilteredGallery
      .map((item, idx) => {
        const fallbackUrl = `https://placehold.co/900x700/800020/FFD700?text=${encodeURIComponent(
          item.title,
        )}`;

        return `
          <button
            type="button"
            data-lightbox-index="${idx}"
            class="group relative w-full h-[265px] rounded-3xl overflow-hidden bg-[#3D0010] border border-[#800020]/15 text-left focus:outline-none focus:ring-2 focus:ring-[#FF4500] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img
              src="${item.image}"
              data-fallback="${fallbackUrl}"
              alt="${item.title}"
              loading="lazy"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#26000A]/95 via-[#800020]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
            <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#26000A]/45 backdrop-blur-md border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity">
              <i data-lucide="maximize-2" class="w-4 h-4"></i>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
              <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFD700] text-[#26000A] mb-2">
                ${item.category}
              </span>
              <h3 class="font-serif text-base sm:text-lg font-bold text-[#FAF6F0] leading-snug line-clamp-2">
                ${item.title}
              </h3>
            </div>
          </button>
        `;
      })
      .join("");

    initImageFallbacks(gridContainer);
    refreshIcons();

    gridContainer
      .querySelectorAll("button[data-lightbox-index]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const index = parseInt(btn.getAttribute("data-lightbox-index"), 10);
          openLightbox(index);
        });
      });
  }

  // Kontrol Lightbox
  const lightboxEl = document.getElementById("gallery-lightbox");
  const lightboxCardEl = document.getElementById("lightbox-card");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCat = document.getElementById("lightbox-category");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-description");
  const lightboxPrevBtn = document.getElementById("lightbox-prev");
  const lightboxNextBtn = document.getElementById("lightbox-next");
  const lightboxCloseBtn = document.getElementById("lightbox-close");

  function updateLightboxContent() {
    if (lightboxIndex === null || !currentFilteredGallery[lightboxIndex])
      return;
    const item = currentFilteredGallery[lightboxIndex];
    const fallbackUrl = `https://placehold.co/1200x800/800020/FFD700?text=${encodeURIComponent(
      item.title,
    )}`;

    lightboxImg.dataset.fallbackApplied = "false";
    lightboxImg.setAttribute("data-fallback", fallbackUrl);
    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxImg.onerror = function () {
      applyImageFallback(this);
    };

    lightboxCat.textContent = item.category;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${currentFilteredGallery.length}`;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description;

    const hasMultiple = currentFilteredGallery.length > 1;
    lightboxPrevBtn.classList.toggle("hidden", !hasMultiple);
    lightboxNextBtn.classList.toggle("hidden", !hasMultiple);
  }

  function openLightbox(index) {
    lightboxIndex = index;
    updateLightboxContent();
    lightboxEl.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }

  function closeLightbox() {
    lightboxIndex = null;
    lightboxEl.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }

  function showNextPhoto() {
    if (lightboxIndex === null || currentFilteredGallery.length <= 1) return;
    lightboxIndex = (lightboxIndex + 1) % currentFilteredGallery.length;
    updateLightboxContent();
  }

  function showPrevPhoto() {
    if (lightboxIndex === null || currentFilteredGallery.length <= 1) return;
    lightboxIndex =
      (lightboxIndex - 1 + currentFilteredGallery.length) %
      currentFilteredGallery.length;
    updateLightboxContent();
  }

  if (lightboxCloseBtn)
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener("click", showNextPhoto);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener("click", showPrevPhoto);

  if (lightboxEl) {
    lightboxEl.addEventListener("click", closeLightbox);
  }
  if (lightboxCardEl) {
    lightboxCardEl.addEventListener("click", (e) => e.stopPropagation());

    // Dukungan gestur swipe di perangkat sentuh (mobile)
    lightboxCardEl.addEventListener(
      "touchstart",
      (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          touchStartX = e.changedTouches[0].screenX;
        }
      },
      { passive: true },
    );
    lightboxCardEl.addEventListener(
      "touchend",
      (e) => {
        if (e.changedTouches && e.changedTouches.length > 0) {
          const deltaX = e.changedTouches[0].screenX - touchStartX;
          if (deltaX < -50) showNextPhoto();
          if (deltaX > 50) showPrevPhoto();
        }
      },
      { passive: true },
    );
  }

  // Navigasi keyboard untuk Lightbox (Esc, ArrowLeft, ArrowRight)
  window.addEventListener("keydown", (e) => {
    if (lightboxIndex === null) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") showNextPhoto();
    else if (e.key === "ArrowLeft") showPrevPhoto();
  });

  /**
   * 4. NAVIGASI SMOOTH SCROLL, MOBILE MENU & SCROLL SPY
   */
  const navbar = document.getElementById("main-navbar");
  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-menu-drawer");
  const mobileIconOpen = document.getElementById("mobile-icon-open");
  const mobileIconClose = document.getElementById("mobile-icon-close");
  const sectionIds = [
    "home",
    "about",
    "vision-mission",
    "activities",
    "gallery",
    "contact",
  ];

  function setMobileMenu(open) {
    isMobileMenuOpen = open;
    mobileDrawer.classList.toggle("hidden", !open);
    mobileIconOpen.classList.toggle("hidden", open);
    mobileIconClose.classList.toggle("hidden", !open);
    mobileToggleBtn.setAttribute("aria-expanded", String(open));
    mobileToggleBtn.setAttribute(
      "aria-label",
      open ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", () => {
      setMobileMenu(!isMobileMenuOpen);
    });
  }

  function scrollToSection(sectionId) {
    setMobileMenu(false);
    const target = document.getElementById(sectionId);
    if (!target) return;
    const navbarOffset = 76;
    const offsetTop =
      target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  }

  document.querySelectorAll("[data-scroll-target]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = el.getAttribute("data-scroll-target");
      scrollToSection(targetId);
    });
  });

  function updateActiveNav(activeId) {
    // Desktop nav styling
    document.querySelectorAll(".nav-link").forEach((btn) => {
      const target = btn.getAttribute("data-scroll-target");
      const dot = btn.querySelector(".nav-dot");
      const isActive = target === activeId;

      btn.classList.toggle("text-[#FAF6F0]", isActive);
      btn.classList.toggle("bg-[#800020]", isActive);
      btn.classList.toggle("shadow-inner", isActive);
      btn.classList.toggle("text-[#E6CED3]", !isActive);

      if (dot) dot.classList.toggle("hidden", !isActive);
    });

    // Mobile nav styling
    document.querySelectorAll(".mobile-nav-link").forEach((btn) => {
      const target = btn.getAttribute("data-scroll-target");
      const isActive = target === activeId;

      btn.classList.toggle("bg-[#800020]", isActive);
      btn.classList.toggle("text-[#FAF6F0]", isActive);
      btn.classList.toggle("border", isActive);
      btn.classList.toggle("border-[#FFD700]/35", isActive);
      btn.classList.toggle("text-[#E6CED3]", !isActive);
    });
  }

  function handleScroll() {
    const scrolled = window.scrollY > 36;
    if (navbar) {
      navbar.classList.toggle("bg-[#26000A]/95", scrolled);
      navbar.classList.toggle("backdrop-blur-md", scrolled);
      navbar.classList.toggle("border-b", scrolled);
      navbar.classList.toggle("border-[#FF4500]/20", scrolled);
      navbar.classList.toggle("py-3", scrolled);
      navbar.classList.toggle("shadow-xl", scrolled);
      navbar.classList.toggle("shadow-black/30", scrolled);

      navbar.classList.toggle("bg-gradient-to-b", !scrolled);
      navbar.classList.toggle("from-[#26000A]/90", !scrolled);
      navbar.classList.toggle("to-transparent", !scrolled);
      navbar.classList.toggle("py-5", !scrolled);
    }

    const scrollPosition = window.scrollY + 160;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const sec = document.getElementById(sectionIds[i]);
      if (sec && sec.offsetTop <= scrollPosition) {
        updateActiveNav(sectionIds[i]);
        break;
      }
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  /**
   * 5. SALIN USERNAME INSTAGRAM (Clipboard API + fallback execCommand)
   */
  const copyBtn = document.getElementById("copy-ig-btn");
  const copyLabel = document.getElementById("copy-ig-label");
  const copyIconDefault = document.getElementById("copy-icon-default");
  const copyIconDone = document.getElementById("copy-icon-done");
  let copyTimeout = null;

  function copyTextFallback(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    tempInput.setAttribute("readonly", "");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const username = "@kspmunikal";
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(username);
        } else {
          copyTextFallback(username);
        }
      } catch (err) {
        try {
          copyTextFallback(username);
        } catch (fallbackErr) {
          console.error("Gagal menyalin ke clipboard:", fallbackErr);
        }
      }

      if (copyLabel) copyLabel.textContent = "Tersalin";
      if (copyIconDefault) copyIconDefault.classList.add("hidden");
      if (copyIconDone) copyIconDone.classList.remove("hidden");

      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => {
        if (copyLabel) copyLabel.textContent = "Salin";
        if (copyIconDefault) copyIconDefault.classList.remove("hidden");
        if (copyIconDone) copyIconDone.classList.add("hidden");
      }, 2500);
    });
  }

  /**
   * 6. ANIMASI SCROLL REVEAL HALUS (IntersectionObserver)
   */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /**
   * 7. INISIALISASI AWAL
   */
  renderActivities();
  renderGalleryFilters();
  renderGalleryGrid();
  initImageFallbacks();
  refreshIcons();
  handleScroll();
  initScrollReveal();
});
