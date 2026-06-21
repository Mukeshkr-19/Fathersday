/**
 * Father's Day Tribute — Main Script
 * Handles scroll reveals, ambient particles, and smooth interactions.
 */

(function () {
  "use strict";

  /* ─── Scroll Reveal ─── */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.06, 0.4)}s`;
    revealObserver.observe(el);
  });

  /* ─── Hero reveals on load ─── */
  window.addEventListener("load", () => {
    document.querySelectorAll(".hero .reveal").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 150);
    });
  });

  /* ─── Soft floating particles ─── */
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(50, Math.floor(window.innerWidth / 30));
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3 - 0.15,
        opacity: Math.random() * 0.35 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196, 160, 106, ${p.opacity})`;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
    });

    animationId = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  /* ─── Smooth anchor scroll offset for fixed elements ─── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
