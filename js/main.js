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
    const submitBtn = document.getElementById("submit-btn");

    const validateForm = () => {
      let isValid = true;
      const errors = {};

      // Name
      const name = form.name.value.trim();
      if (!name) {
        errors.name = "Full name is required.";
        isValid = false;
      }

      // Email
      const email = form.email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        errors.email = "Work email is required.";
        isValid = false;
      } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
        isValid = false;
      }

      // Business Name
      const businessName = form.businessName.value.trim();
      if (!businessName) {
        errors.businessName = "Business name is required.";
        isValid = false;
      }

      // Website (optional, but validate if provided)
      const website = form.website.value.trim();
      if (website && !/^https?:\/\/.+/.test(website)) {
        errors.website = "Please enter a valid URL (e.g., https://example.com).";
        isValid = false;
      }

      // Business Type
      if (!form.businessType.value) {
        errors.businessType = "Please select a business type.";
        isValid = false;
      }

      // Team Size
      if (!form.teamSize.value) {
        errors.teamSize = "Please select a team size.";
        isValid = false;
      }

      // Pain
      const pain = form.pain.value.trim();
      if (!pain) {
        errors.pain = "Please describe your biggest admin pain.";
        isValid = false;
      }

      // Urgency
      if (!form.urgency.value) {
        errors.urgency = "Please select an urgency.";
        isValid = false;
      }

      // Consent
      if (!form.consent.checked) {
        errors.consent = "You must consent to be contacted.";
        isValid = false;
      }

      // Honeypot
      if (form.honeypot.value) {
        // Spam, ignore
        return false;
      }

      // Display errors
      Object.keys(errors).forEach(key => {
        const errorEl = document.getElementById(`${key}-error`);
        if (errorEl) {
          errorEl.textContent = errors[key];
        }
      });

      // Clear previous errors for valid fields
      ['name', 'email', 'businessName', 'website', 'businessType', 'teamSize', 'pain', 'urgency', 'consent'].forEach(key => {
        if (!errors[key]) {
          const errorEl = document.getElementById(`${key}-error`);
          if (errorEl) errorEl.textContent = '';
        }
      });

      return isValid;
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (statusEl) statusEl.textContent = '';
      if (submitBtn) submitBtn.disabled = true;

      if (validateForm()) {
        // Simulate submission
        setTimeout(() => {
          window.location.href = 'request-thanks.html';
        }, 1000);
      } else {
        if (statusEl) statusEl.textContent = 'Please correct the errors above.';
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  // Cookie banner
  const COOKIE_KEY = "zysolves_cookie_consent";
  const hasConsent = localStorage.getItem(COOKIE_KEY) === "yes";

  const createCookieBanner = () => {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <div class="cookie-banner__text">
        We use cookies to improve website functionality and understand how visitors use our site.
        By continuing to browse, you agree to our use of cookies.
      </div>
      <div class="cookie-banner__actions">
        <a class="cookie-banner__link" href="privacy.html">Learn more</a>
        <button class="btn btn-primary btn-small cookie-banner__button" type="button">OK</button>
      </div>
    `;

    const okBtn = banner.querySelector(".cookie-banner__button");
    if (okBtn) {
      okBtn.addEventListener("click", () => {
        localStorage.setItem(COOKIE_KEY, "yes");
        banner.remove();
      });
    }

    document.body.appendChild(banner);
  };

  if (!hasConsent) {
    window.addEventListener("load", createCookieBanner);
  }

  // Sticky mobile CTA
  const createStickyCTA = () => {
    const cta = document.createElement("div");
    cta.className = "sticky-cta";
    cta.innerHTML = `
      <a href="request.html" class="btn btn-primary">Request Automation Review</a>
      <button class="sticky-cta-close" aria-label="Close">&times;</button>
    `;

    const closeBtn = cta.querySelector(".sticky-cta-close");
    closeBtn.addEventListener("click", () => {
      cta.remove();
      localStorage.setItem("sticky_cta_dismissed", "yes");
    });

    document.body.appendChild(cta);
  };

  if (window.innerWidth < 768 && window.scrollY > 200 && !localStorage.getItem("sticky_cta_dismissed")) {
    createStickyCTA();
  }

  window.addEventListener("scroll", () => {
    if (window.innerWidth < 768 && window.scrollY > 200 && !document.querySelector(".sticky-cta") && !localStorage.getItem("sticky_cta_dismissed")) {
      createStickyCTA();
    }
  });
})();

