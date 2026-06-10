/* ===============================
   Muhavan Portfolio — Interactions
   Bold but tasteful animations
================================== */
(function () {
  "use strict";

  /* ---------- Preloader ---------- */
  window.addEventListener("load", function () {
    const pre = document.getElementById("preloader");
    if (!pre) return;
    setTimeout(() => pre.classList.add("done"), 700);
    setTimeout(() => pre.remove(), 1500);
  });

  /* ---------- Custom cursor ---------- */
  (function cursor() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();
    const interactive = "a, button, .skill-card, .cert-card, .about-image, .contact-cta, .project-card, .timeline-card";
    document.querySelectorAll(interactive).forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
    });
  })();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".mobile-nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("mobile-nav-active");
    });
  }

  /* ---------- Smooth scroll for scrollto links ---------- */
  document.querySelectorAll(".scrollto").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      // Offset for fixed top header
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
      }
    });
  });

  /* ---------- Scroll spy + scrolled header + progress ---------- */
  const navLinks = document.querySelectorAll(".nav-link.scrollto");
  const sections = Array.from(navLinks)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);
  const header = document.getElementById("header");
  const progress = document.querySelector(".scroll-progress");

  function onScroll() {
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
    sections.forEach((sec, i) => {
      if (sec.offsetTop <= focal) activeIdx = i;
    });
    navLinks.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
    // Back-to-top
    const b = document.querySelector(".back-to-top");
    if (b) b.classList.toggle("active", scrollY > 500);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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

  /* ---------- Typed.js init ---------- */
  const typedEl = document.querySelector(".typed");
  if (typedEl && typeof Typed !== "undefined") {
    let items = typedEl.getAttribute("data-typed-items");
    items = items.split(",").map((s) => s.trim());
    new Typed(".typed", {
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
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
    });
  }

  /* ---------- 3D Tilt on cards (desktop) ---------- */
  (function tilt() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const cards = document.querySelectorAll(".project-card, .cert-card, .skill-card, .timeline-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const rx = (-y * 6).toFixed(2);
        const ry = (x * 6).toFixed(2);
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  })();

  /* ---------- Magnetic hover on header CTA & nav items ---------- */
  (function magnetic() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const targets = document.querySelectorAll(".header-cta, .btn-primary, .btn-ghost, .footer-social a");
    targets.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
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

  /* ---------- Parallax on hero blobs ---------- */
  const hero = document.getElementById("hero");
  if (hero && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.setProperty("--mx", x.toFixed(3));
      hero.style.setProperty("--my", y.toFixed(3));
    });
  }
})();
