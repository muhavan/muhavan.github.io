/* ============================================================
   Muhavan Portfolio — Internationalization (i18n) Module
   Provides seamless English & Indonesian language switching
   with localStorage persistence and Typed.js dynamic reload.
============================================================ */
(function () {
  "use strict";

  const translations = {
    id: {
      brand: {
        sub: "Website Resmi",
      },
      nav: {
        home: "Beranda",
        about: "Tentang",
        skills: "Keahlian",
        experience: "Pengalaman",
        projects: "Proyek",
        certificate: "Sertifikat",
        contact: "Kontak",
        cv: "CV",
      },
      hero: {
        eyebrow: "Tersedia untuk bekerja · Bogor, Indonesia",
        subtitle_prefix: "Saya seorang ",
        typed_items: "Web Developer, IT Support, Network Engineer, Lulusan Teknik Informatika",
        cta_contact: "Hubungi saya",
        cta_about: "Tentang saya",
        scroll: "Gulir",
      },
      about: {
        label: "01 — Tentang",
        title_pre: "Halo, ",
        title_accent: "saya Evan.",
        subtitle: "Lulusan Teknik Informatika yang antusias dengan pengembangan web, jaringan & IT support — membangun sistem yang bermanfaat dan siap berkontribusi secara profesional.",
        headline_pre: "Lulusan Teknik Informatika berfokus pada ",
        headline_accent: "web programming",
        desc: "Lulusan S1 Teknik Informatika dari <strong>Universitas Bina Sarana Informatika</strong> (IPK <strong>3.74</strong>, lulus September 2024). Memiliki minat besar dalam pengembangan web &mdash; membangun aplikasi dengan Laravel, Node.js, dan teknologi web modern. Saya juga memiliki pengalaman langsung di bidang IT Support, Network Engineering, dan Cyber Security, dengan keahlian di Python, PHP, dan Mikrotik. Siap berkontribusi secara positif di lingkungan teknologi yang dinamis.",
        info_name: "Nama",
        info_city: "Kota",
        info_city_val: "Bogor, Indonesia",
        info_education: "Pendidikan",
        info_education_val: "Universitas Bina Sarana Informatika",
        info_gpa: "IPK",
        info_email: "Email",
        info_focus: "Fokus",
        info_focus_val: "Web Dev · Laravel · Node.js",
        cta: "Hubungi saya",
      },
      skills: {
        label: "02 — Keahlian",
        title_pre: "Peralatan teknis ",
        title_accent: "yang siap pakai.",
        subtitle: "Bahasa pemrograman, framework, dan perangkat lunak yang saya gunakan sehari-hari.",
      },
      experience: {
        label: "03 — Pengalaman",
        title_pre: "Pengalaman kerja ",
        title_accent: "& pendidikan.",
        subtitle: "Peran praktis dalam web development, IT, dan cyber security &mdash; dari magang hingga pendidikan saat ini.",
        exp1_period: "Magang",
        exp1_role: "Web Developer Intern",
        exp1_company: "Dinas Pariwisata Kota Tangerang Selatan",
        exp1_pt1: "Membangun platform web untuk pendaftaran dan pengajuan berkas UMKM (Usaha Mikro, Kecil, dan Menengah).",
        exp1_pt2: "Mengembangkan sistem informasi pariwisata yang menampilkan destinasi wisata di Kota Tangerang Selatan.",
        exp1_pt3: "Tech stack: <strong>Node.js</strong>, Express, MySQL &mdash; dirancang menyeluruh (end-to-end) dengan dashboard admin.",
        exp2_period: "Sep 2022 — Sep 2024",
        exp2_pill: "Pendidikan",
        exp2_role: "S1 — Teknik Informatika",
        exp2_company: "Universitas Bina Sarana Informatika · IPK 3.74",
        exp2_pt1: "Fokus pada pemrograman web, rekayasa perangkat lunak, dan sistem informasi.",
        exp2_pt2: "Lulus tepat waktu pada September 2024 dengan predikat sangat memuaskan (IPK 3.74).",
        exp3_period: "2019 — 2022",
        exp3_pill: "Kejuruan",
        exp3_role: "Teknik Komputer & Jaringan",
        exp3_company: "SMK LETRIS Indonesia 2",
        exp3_pt1: "Pendidikan kejuruan seputar sistem komputer dan dasar-dasar jaringan komputer.",
        exp3_pt2: "Fondasi administrasi jaringan menggunakan Mikrotik &mdash; kemudian tersertifikasi resmi MTCNA.",
      },
      projects: {
        label: "04 — Proyek",
        title_pre: "Karya yang telah ",
        title_accent: "saya bangun.",
        subtitle: "Proyek pilihan &mdash; dari aplikasi web, platform SaaS, bot AI, hingga integrasi sistem nyata.",
        p1_tag: "SaaS / Web App",
        p1_title: "fotodarikamu • Kamera Sekali Pakai Digital Pernikahan & Acara",
        p1_desc: "Layanan kamera sekali pakai digital untuk resepsi pernikahan dan acara di Indonesia. Tamu memotret langsung lewat pemindaian QR code tanpa perlu install aplikasi, dengan filter film vintage retro 35mm, dan seluruh foto otomatis terkumpul dalam satu album bersama.",
        p2_tag: "Magang",
        p2_title: "Sistem Informasi UMKM & Pariwisata Dinas Pariwisata Tangsel",
        p2_desc: "Dibangun untuk Dinas Pariwisata Kota Tangerang Selatan saat magang. Platform web untuk pengajuan izin usaha UMKM serta sistem informasi pariwisata yang menampilkan destinasi menarik di kawasan Tangsel.",
        p3_tag: "Aplikasi Web",
        p3_title: "Karyawanku — Sistem Manajemen Karyawan",
        p3_desc: "Platform manajemen internal perusahaan lengkap dengan modul penggajian (payroll), absensi, permohonan cuti, dan data karyawan. Dilengkapi antarmuka intuitif dan dashboard admin.",
        p4_tag: "Bot Telegram",
        p4_title: "VansGPT — AI Telegram Bot",
        p4_desc: "Bot Telegram interaktif yang terintegrasi dengan API model bahasa kecerdasan buatan (AI). Mendukung percakapan kontekstual, respon streaming cepat, dan perintah kustom.",
      },
      github: {
        eyebrow: "Aktivitas Terkini",
        title_pre: "Statistik dari ",
        cta: "Lihat profil",
      },
      certificates: {
        label: "05 — Sertifikat",
        title_pre: "Bukti nyata, ",
        title_accent: "bukan sekadar janji.",
        subtitle: "Sertifikasi resmi yang telah saya raih sepanjang perjalanan teknologi saya.",
        c1_issuer: "Diterbitkan oleh MikroTik",
        c2_issuer: "Diterbitkan oleh BNSP (Indonesia)",
        c3_issuer: "Diterbitkan oleh BNSP (Indonesia)",
        c4_issuer: "Diterbitkan oleh Cisco / Python Institute",
        c5_issuer: "Diterbitkan oleh KOMDIGI",
        c6_issuer: "Diterbitkan oleh Skill Academy",
        c7_issuer: "Diterbitkan oleh Certiport / Microsoft",
        c8_issuer: "Diterbitkan oleh Universitas Bina Sarana Informatika",
        view_btn: "Lihat sertifikat",
      },
      contact: {
        label: "06 — Kontak",
        title_pre: "Mari ciptakan ",
        title_accent: "sesuatu yang hebat.",
        subtitle: "Terbuka untuk peluang kerja, proyek kolaborasi, maupun diskusi seputar teknologi.",
        linkedin_sub: "Web Developer · Laravel · Node.js · IT Support<br>Universitas Bina Sarana Informatika",
        linkedin_cta: "Lihat profil lengkap",
        box_title: "Punya ide atau proyek? <br><span class=\"accent\">Mari diskusikan.</span>",
        box_desc: "Kirim pesan melalui WhatsApp atau email — saya siap merespons sesegera mungkin.",
        box_btn: "Hubungi saya",
        loc_title: "Lokasi",
      },
      footer: {
        rights: "Hak cipta dilindungi.",
      },
    },

    en: {
      brand: {
        sub: "Official Website",
      },
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        certificate: "Certificate",
        contact: "Contact",
        cv: "CV",
      },
      hero: {
        eyebrow: "Available for work · Bogor, Indonesia",
        subtitle_prefix: "I&rsquo;m ",
        typed_items: "Web Developer, IT Support, Network Engineer, Informatics Graduate",
        cta_contact: "Let&rsquo;s talk",
        cta_about: "About me",
        scroll: "Scroll",
      },
      about: {
        label: "01 — About",
        title_pre: "Hello, ",
        title_accent: "I&rsquo;m Evan.",
        subtitle: "An Information Technology graduate passionate about web development, networking, and IT support — building reliable systems and ready to make professional impact.",
        headline_pre: "Informatics graduate focused on ",
        headline_accent: "web programming",
        desc: "Information Technology graduate from <strong>Bina Sarana Informatika University</strong> (GPA <strong>3.74</strong>, graduated September 2024). Passionate about web development &mdash; building things with Laravel, Node.js, and modern web technologies. I also have hands-on experience in IT Support, Network Engineering and Cyber Security, with skills in Python, PHP, and Mikrotik. Comfortable across the stack, ready to make positive contributions in a dynamic technology environment.",
        info_name: "Name",
        info_city: "City",
        info_city_val: "Bogor, Indonesia",
        info_education: "Education",
        info_education_val: "Universitas Bina Sarana Informatika",
        info_gpa: "GPA",
        info_email: "Email",
        info_focus: "Focus",
        info_focus_val: "Web Dev · Laravel · Node.js",
        cta: "Get in touch",
      },
      skills: {
        label: "02 — Skills",
        title_pre: "A toolbox ",
        title_accent: "that ships.",
        subtitle: "Programming languages, frameworks and tools I work with day to day.",
      },
      experience: {
        label: "03 — Experience",
        title_pre: "Where I&rsquo;ve ",
        title_accent: "worked.",
        subtitle: "Hands-on roles in cyber security, web development and IT &mdash; from internships to current positions.",
        exp1_period: "Internship",
        exp1_role: "Web Developer Intern",
        exp1_company: "Dinas Pariwisata Kota Tangerang Selatan",
        exp1_pt1: "Built a web platform for UMKM (Micro, Small, and Medium Enterprises) registration and submissions.",
        exp1_pt2: "Developed a tourism information system showcasing destinations across Tangerang Selatan.",
        exp1_pt3: "Stack: <strong>Node.js</strong>, Express, MySQL &mdash; designed end-to-end with admin dashboard.",
        exp2_period: "Sep 2022 — Sep 2024",
        exp2_pill: "Education",
        exp2_role: "S1 — Information Technology",
        exp2_company: "Bina Sarana Informatika University · GPA 3.74",
        exp2_pt1: "Focus on web programming, software engineering, and information systems.",
        exp2_pt2: "Graduated in September 2024 with distinction (GPA 3.74).",
        exp3_period: "2019 — 2022",
        exp3_pill: "Vocational",
        exp3_role: "Computer & Network Engineering",
        exp3_company: "SMK LETRIS Indonesia 2",
        exp3_pt1: "Vocational training in computer systems and networking fundamentals.",
        exp3_pt2: "Foundation in network administration with Mikrotik &mdash; later certified as MTCNA.",
      },
      projects: {
        label: "04 — Projects",
        title_pre: "Things I&rsquo;ve ",
        title_accent: "built.",
        subtitle: "Selected work &mdash; from web platforms and SaaS apps to AI bots and live systems.",
        p1_tag: "SaaS / Web App",
        p1_title: "fotodarikamu • Digital Disposable Camera for Weddings & Events",
        p1_desc: "A digital disposable camera service for weddings and celebrations in Indonesia. Guests capture candid memories directly by scanning a QR code without installing any app, styled with aesthetic 35mm vintage film filters, automatically gathering in a shared live album.",
        p2_tag: "Internship",
        p2_title: "Sistem Informasi UMKM & Pariwisata Dinas Pariwisata Tangsel",
        p2_desc: "Built for Dinas Pariwisata Kota Tangerang Selatan during my internship. A web platform for UMKM business submissions and a tourism information system featuring destinations across the region.",
        p3_tag: "Web App",
        p3_title: "Karyawanku &mdash; Employee Management System",
        p3_desc: "A full management platform for companies with payroll, attendance, leave-request and complete employee modules. Built with an intuitive interface and comprehensive admin features.",
        p4_tag: "Telegram Bot",
        p4_title: "VansGPT &mdash; AI Telegram Bot",
        p4_desc: "An intelligent Telegram bot integrated with an AI language model API. Features context-aware conversation handling, rapid response streaming, and custom command configurations.",
      },
      github: {
        eyebrow: "Live from GitHub",
        title_pre: "Stats from ",
        cta: "View profile",
      },
      certificates: {
        label: "05 — Certificates",
        title_pre: "Receipts, ",
        title_accent: "not promises.",
        subtitle: "Official certifications I&rsquo;ve earned along the journey.",
        c1_issuer: "Issued by MikroTik",
        c2_issuer: "Issued by BNSP (Indonesia)",
        c3_issuer: "Issued by BNSP (Indonesia)",
        c4_issuer: "Issued by Cisco / Python Institute",
        c5_issuer: "Issued by KOMDIGI",
        c6_issuer: "Issued by Skill Academy",
        c7_issuer: "Issued by Certiport / Microsoft",
        c8_issuer: "Issued by Bina Sarana Informatika University",
        view_btn: "View certificate",
      },
      contact: {
        label: "06 — Contact",
        title_pre: "Let&rsquo;s build ",
        title_accent: "something good.",
        subtitle: "Open to opportunities, collaborations and a friendly chat about networks.",
        linkedin_sub: "Web Developer · Laravel · Node.js · IT Support<br>Universitas Bina Sarana Informatika",
        linkedin_cta: "View full profile",
        box_title: "Got an idea? <br><span class=\"accent\">Let&rsquo;s talk.</span>",
        box_desc: "Drop me an email or message — I usually reply within a day.",
        box_btn: "Contact me",
        loc_title: "Location",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  };

  /**
   * Helper to retrieve nested keys like 'hero.cta_contact'
   */
  function getNestedTranslation(obj, path) {
    return path.split(".").reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  /**
   * Main function to switch site language
   */
  function setLanguage(lang) {
    if (!translations[lang]) lang = "id";

    const dict = translations[lang];

    // Update document lang
    document.documentElement.lang = lang;

    // Update all elements with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getNestedTranslation(dict, key);
      if (val !== undefined) {
        el.innerHTML = val;
      }
    });

    // Update language switcher active states
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    // Update Typed.js items if initialized
    const typedEl = document.querySelector(".typed");
    if (typedEl) {
      const newItems = dict.hero.typed_items;
      typedEl.setAttribute("data-typed-items", newItems);

      // If Typed instance exists, destroy and re-create smoothly
      if (window.typedInstance) {
        window.typedInstance.destroy();
      }
      if (typeof Typed !== "undefined") {
        window.typedInstance = new Typed(".typed", {
          strings: newItems.split(",").map((s) => s.trim()),
          loop: true,
          typeSpeed: 70,
          backSpeed: 40,
          backDelay: 1800,
        });
      }
    }

    // Save to localStorage
    try {
      localStorage.setItem("muhavan_lang", lang);
    } catch (e) {
      /* localStorage might be restricted in some privacy modes */
    }
  }

  // Expose to window
  window.setLanguage = setLanguage;

  // Initialize on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    let savedLang = "id"; // Default to Indonesian
    try {
      const stored = localStorage.getItem("muhavan_lang");
      if (stored && translations[stored]) {
        savedLang = stored;
      }
    } catch (e) {}

    // Setup click handlers for all .lang-btn
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const chosen = btn.getAttribute("data-lang");
        setLanguage(chosen);
      });
    });

    // Initial set
    setLanguage(savedLang);
  });
})();
