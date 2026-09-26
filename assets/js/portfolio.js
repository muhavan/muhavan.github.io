/* ============================================================
   Muhavan Portfolio — Interactions
   Optimized 60-120+ FPS animations & buttery-smooth tracking
============================================================ */
(function () {
  "use strict";

  /* ---------- Preloader ---------- */
  window.addEventListener("load", function () {
    const pre = document.getElementById("preloader");
    if (!pre) return;
    setTimeout(() => pre.classList.add("done"), 500);
    setTimeout(() => pre.remove(), 1200);
  });

  /* ---------- Custom Cursor (Silky smooth, no CSS conflict) ---------- */
  (function cursor() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;
    let isInitialized = false;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (!isInitialized) {
        rx = mx;
        ry = my;
        isInitialized = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
      if (isInitialized) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    });

    function loop() {
      if (isInitialized) {
        // Fast responsive lerp
        rx += (mx - rx) * 0.28;
        ry += (my - ry) * 0.28;

        // Hardware-accelerated subpixel translate3d
        dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate3d(-50%, -50%, 0)`;
        ring.style.transform = `translate3d(${rx.toFixed(2)}px, ${ry.toFixed(2)}px, 0) translate3d(-50%, -50%, 0)`;
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    const interactive = "a, button, .skill-card, .cert-card, .about-image, .contact-cta, .project-card, .timeline-card, .lang-btn";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"), { passive: true });
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"), { passive: true });
    });
  })();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".mobile-nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("mobile-nav-active");
    });
  }

  // Close mobile nav when clicking CV button
  const cvBtnMobile = document.querySelector(".cv-btn-mobile");
  if (cvBtnMobile) {
    cvBtnMobile.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
      }
    });
  }

  // Close mobile nav when clicking outside header
  document.addEventListener("click", (e) => {
    if (document.body.classList.contains("mobile-nav-active")) {
      const header = document.getElementById("header");
      if (header && !header.contains(e.target)) {
        document.body.classList.remove("mobile-nav-active");
      }
    }
  });

  /* ---------- Smooth scroll for scrollto links ---------- */
  document.querySelectorAll(".scrollto").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      // Offset for fixed top header
      const offset = 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
      }
    });
  });

  /* ---------- Scroll spy + scrolled header + progress (Throttled with rAF) ---------- */
  const navLinks = document.querySelectorAll(".nav-link.scrollto");
  const sections = Array.from(navLinks)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  const header = document.getElementById("header");
  const progress = document.querySelector(".scroll-progress");
  let backToTopBtn = document.querySelector(".back-to-top");

  let scrollTicking = false;

  function updateScroll() {
    const scrollY = window.scrollY;

    // Scrolled header
    if (header) header.classList.toggle("scrolled", scrollY > 40);

    // Progress bar
    if (progress) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docH > 0 ? scrollY / docH : 0;
      progress.style.transform = `scaleX(${Math.min(ratio, 1)})`;
    }

    // Active nav link
    const focal = scrollY + window.innerHeight * 0.35;
    let activeIdx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop <= focal) activeIdx = i;
    }
    navLinks.forEach((l, i) => l.classList.toggle("active", i === activeIdx));

    // Back-to-top
    if (!backToTopBtn) backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) backToTopBtn.classList.toggle("active", scrollY > 500);

    scrollTicking = false;
  }

  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScroll);
      scrollTicking = true;
    }
  }, { passive: true });

  updateScroll();

  /* ---------- Back-to-top button ---------- */
  if (!document.querySelector(".back-to-top")) {
    const btn = document.createElement("a");
    btn.href = "#hero";
    btn.className = "back-to-top scrollto";
    btn.setAttribute("data-testid", "back-to-top");
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(btn);
    backToTopBtn = btn;
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal, .skill-card, .project-card");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  reveals.forEach((el) => io.observe(el));

  /* ---------- Typed.js init (Saved to window for i18n switcher) ---------- */
  const typedEl = document.querySelector(".typed");
  if (typedEl && typeof Typed !== "undefined") {
    let items = typedEl.getAttribute("data-typed-items");
    items = items ? items.split(",").map((s) => s.trim()) : [];
    window.typedInstance = new Typed(".typed", {
      strings: items,
      loop: true,
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1800,
    });
  }

  /* ---------- AOS init ---------- */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 50,
    });
  }

  /* ---------- 3D Tilt on cards (desktop, rAF optimized) ---------- */
  (function tilt() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cards = document.querySelectorAll(".project-card, .cert-card, .skill-card, .timeline-card");
    cards.forEach((card) => {
      let rect = null;
      let rafId = null;

      card.addEventListener("mouseenter", () => {
        rect = card.getBoundingClientRect();
      }, { passive: true });

      card.addEventListener("mousemove", (e) => {
        if (!rect) rect = card.getBoundingClientRect();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          const rx = (-y * 5).toFixed(2);
          const ry = (x * 5).toFixed(2);
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        });
      }, { passive: true });

      card.addEventListener("mouseleave", () => {
        if (rafId) cancelAnimationFrame(rafId);
        rect = null;
        card.style.transform = "";
      }, { passive: true });
    });
  })();

  /* ---------- Magnetic hover on header CTA & nav items (rAF optimized) ---------- */
  (function magnetic() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const targets = document.querySelectorAll(".header-cta, .btn-primary, .btn-ghost, .footer-social a");
    targets.forEach((el) => {
      let rect = null;
      let rafId = null;

      el.addEventListener("mouseenter", () => {
        rect = el.getBoundingClientRect();
      }, { passive: true });

      el.addEventListener("mousemove", (e) => {
        if (!rect) rect = el.getBoundingClientRect();
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.22}px, 0)`;
        });
      }, { passive: true });

      el.addEventListener("mouseleave", () => {
        if (rafId) cancelAnimationFrame(rafId);
        rect = null;
        el.style.transform = "";
      }, { passive: true });
    });
  })();

  /* ---------- Number counter animation ---------- */
  (function counters() {
    const els = document.querySelectorAll("[data-counter]");
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.getAttribute("data-counter"));
        const decimals = (el.getAttribute("data-decimals") || 0) | 0;
        const dur = 1400;
        const start = performance.now();
        function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach((el) => obs.observe(el));
  })();

  /* ---------- Parallax on hero blobs (rAF optimized) ---------- */
  const hero = document.getElementById("hero");
  if (hero && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let heroRect = null;
    let heroRaf = null;

    hero.addEventListener("mouseenter", () => {
      heroRect = hero.getBoundingClientRect();
    }, { passive: true });

    hero.addEventListener("mousemove", (e) => {
      if (!heroRect) heroRect = hero.getBoundingClientRect();
      if (heroRaf) cancelAnimationFrame(heroRaf);
      heroRaf = requestAnimationFrame(() => {
        const x = (e.clientX - heroRect.left) / heroRect.width - 0.5;
        const y = (e.clientY - heroRect.top) / heroRect.height - 0.5;
        hero.style.setProperty("--mx", x.toFixed(3));
        hero.style.setProperty("--my", y.toFixed(3));
      });
    }, { passive: true });

    hero.addEventListener("mouseleave", () => {
      heroRect = null;
      if (heroRaf) cancelAnimationFrame(heroRaf);
    }, { passive: true });
  }
})();
