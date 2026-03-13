(function () {
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target) return;
      const clickedInside = menu.contains(target) || toggle.contains(target);
      if (!clickedInside && menu.classList.contains("open")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Counter animation on homepage
  const counters = document.querySelectorAll("[data-counter]");
  const animateCounters = () => {
    counters.forEach((el) => {
      const end = Number(el.getAttribute("data-counter")) || 0;
      const duration = 650;
      const start = 0;
      const startTime = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - startTime) / duration);
        const value = Math.floor(start + (end - start) * (0.2 + 0.8 * t));
        el.textContent = String(value);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = String(end);
      };

      requestAnimationFrame(tick);
    });
  };

  if (counters.length) {
    // only animate when visible
    const heroCard = document.querySelector(".hero-card");
    if ("IntersectionObserver" in window && heroCard) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((en) => en.isIntersecting)) {
            animateCounters();
            io.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      io.observe(heroCard);
    } else {
      animateCounters();
    }
  }

  // Demo form handler
  const form = document.querySelector("[data-form]");
  if (form) {
    const statusEl = document.querySelector("[data-form-status]");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (statusEl) {
        statusEl.textContent =
          "Thanks. Your message is ready to be sent. Connect this form to an email service when you are ready to launch.";
      }
      form.reset();
    });
  }
})();