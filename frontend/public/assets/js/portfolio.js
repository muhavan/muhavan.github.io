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
    // Hover state on interactive elements
    const interactive = "a, button, .skill-card, .cert-card, .about-image, .contact-cta";
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
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-list");
        icon.classList.toggle("bi-x");
      }
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
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        const icon = navToggle && navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("bi-list");
          icon.classList.remove("bi-x");
        }
      }
    });
  });

  /* ---------- Scroll spy (active nav link) ---------- */
  const navLinks = document.querySelectorAll(".nav-link.scrollto");
  const sections = Array.from(navLinks)
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  function updateActiveNav() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    let activeIdx = 0;
    sections.forEach((sec, i) => {
      if (sec.offsetTop <= scrollPos) activeIdx = i;
    });
    navLinks.forEach((l, i) => l.classList.toggle("active", i === activeIdx));
  }
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  /* ---------- Back to top ---------- */
  const backToTop = document.querySelector(".back-to-top");
  function toggleBackTop() {
    if (!backToTop) return;
    backToTop.classList.toggle("active", window.scrollY > 400);
  }
  // Inject back-to-top if not present
  if (!backToTop) {
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
  window.addEventListener("scroll", () => {
    const b = document.querySelector(".back-to-top");
    if (b) b.classList.toggle("active", window.scrollY > 400);
  }, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal, .skill-card");
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

  /* ---------- AOS init (kept for compatibility, mild) ---------- */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 60,
    });
  }

  /* ---------- Subtle parallax on hero blobs ---------- */
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
