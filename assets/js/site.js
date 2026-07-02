(function () {
  const NAV_ITEMS = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "services", label: "Services", href: "services.html" },
    { id: "projects", label: "Projects", href: "projects.html" },
    { id: "why-us", label: "Why Us", href: "why-us.html" },
    { id: "contact", label: "Contact", href: "contact.html" },
  ];

  function navLinkClass(active, isActive) {
    const base =
      "text-label-md font-label-md uppercase pb-1 transition-all duration-200 ";
    if (isActive) {
      return base + "text-on-primary border-b-2 border-on-primary font-bold";
    }
    return (
      base +
      "text-on-primary/80 hover:text-on-primary hover:border-b-2 hover:border-on-primary"
    );
  }

  function renderHeader(activePage) {
    const desktopLinks = NAV_ITEMS.map(
      (item) =>
        `<a class="${navLinkClass(activePage, item.id === activePage)}" href="${item.href}">${item.label}</a>`
    ).join("");

    const mobileLinks = NAV_ITEMS.map(
      (item) =>
        `<a class="block py-3 px-4 ${item.id === activePage ? "text-on-primary font-bold bg-primary-container" : "text-on-primary/80 hover:bg-primary-container/50"}" href="${item.href}">${item.label}</a>`
    ).join("");

    return `
<header class="bg-primary sticky top-0 z-50" id="site-header">
  <nav class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
    <a href="index.html" class="text-headline-md font-headline-md font-bold text-on-primary hover:opacity-90 transition-opacity">
      BALAJI INFRA
    </a>
    <div class="hidden md:flex items-center gap-8">
      ${desktopLinks}
      <a href="contact.html" class="bg-accent text-accent-foreground px-6 py-2 font-label-md text-label-md uppercase tracking-wider rounded-lg active:scale-95 transition-transform duration-150">
        Discuss a Project
      </a>
    </div>
    <button type="button" id="mobile-menu-btn" class="md:hidden text-on-primary p-2" aria-label="Open menu" aria-expanded="false">
      <span class="material-symbols-outlined" id="menu-icon">menu</span>
    </button>
  </nav>
  <div id="mobile-menu" class="hidden md:hidden border-t border-on-primary/20 bg-primary-container">
    <div class="px-margin-mobile py-4 space-y-1">
      ${mobileLinks}
      <a href="contact.html" class="block mt-4 bg-accent text-accent-foreground text-center py-3 font-label-md text-label-md uppercase tracking-wider rounded-lg">
        Discuss a Project
      </a>
    </div>
  </div>
</header>`;
  }

  function renderFooter() {
    return `
<footer class="bg-surface-container-highest text-on-surface border-t border-outline-variant">
  <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full px-margin-mobile md:px-margin-desktop py-20 max-w-container-max-width mx-auto">
    <div class="md:col-span-5">
      <div class="text-headline-md font-headline-md font-bold text-primary mb-6">BALAJI INFRA</div>
      <p class="text-body-md font-body-md text-on-surface-variant max-w-sm mb-8">
        ISO 9001:2015 certified infrastructure firm specializing in heavy civil engineering and road construction across challenging international terrains.
      </p>
      <div class="flex gap-4">
        <a class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors rounded-lg" href="contact.html" aria-label="Contact">
          <span class="material-symbols-outlined text-sm">public</span>
        </a>
        <a class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors rounded-lg" href="mailto:inquiries@balajiinfra.com" aria-label="Email">
          <span class="material-symbols-outlined text-sm">mail</span>
        </a>
        <a class="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors rounded-lg" href="contact.html" aria-label="Phone">
          <span class="material-symbols-outlined text-sm">call</span>
        </a>
      </div>
    </div>
    <div class="md:col-span-2">
      <h4 class="text-label-md font-label-md text-primary uppercase mb-6">Navigation</h4>
      <ul class="space-y-3">
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="index.html">Home</a></li>
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="about.html">About</a></li>
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="services.html">Services</a></li>
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="projects.html">Projects</a></li>
      </ul>
    </div>
    <div class="md:col-span-2">
      <h4 class="text-label-md font-label-md text-primary uppercase mb-6">Company</h4>
      <ul class="space-y-3">
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="why-us.html">Why Us</a></li>
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="contact.html">Contact</a></li>
        <li><a class="text-body-md text-on-surface-variant hover:text-primary transition-colors" href="contact.html">WhatsApp</a></li>
      </ul>
    </div>
    <div class="md:col-span-3">
      <h4 class="text-label-md font-label-md text-primary uppercase mb-6">Head Office</h4>
      <p class="text-body-md text-on-surface-variant mb-4">
        Nashik, Maharashtra, India 422001<br/>
        Email: inquiries@balajiinfra.com<br/>
        Phone: +91 (253) 000-0000
      </p>
      <div class="p-4 bg-surface-container-low border border-outline-variant flex items-center gap-4 rounded-lg">
        <span class="material-symbols-outlined text-primary">location_on</span>
        <span class="text-label-md font-label-md uppercase">Nashik, India</span>
      </div>
    </div>
  </div>
  <div class="w-full px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-center text-on-surface-variant text-label-md gap-4">
    <div>© 2026 BALAJI INFRA. All Rights Reserved.</div>
    <div class="flex gap-6">
      <span>Registration No: BAL-992-01</span>
      <span>ISO 9001:2015</span>
    </div>
  </div>
</footer>`;
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("menu-icon");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("hidden");
      menu.classList.toggle("hidden", isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      if (icon) icon.textContent = isOpen ? "menu" : "close";
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        if (icon) icon.textContent = "menu";
      });
    });
  }

  function initHeaderScroll() {
    const header = document.getElementById("site-header");
    if (!header) return;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("backdrop-blur-md", "bg-primary/95");
      } else {
        header.classList.remove("backdrop-blur-md", "bg-primary/95");
      }
    });
  }

  function initForms() {
    document.querySelectorAll("form[data-inquiry-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (!btn) return;
        const originalText = btn.innerText;
        btn.innerText = "Processing...";
        btn.disabled = true;

        setTimeout(() => {
          btn.style.backgroundColor = "#D69E2E";
          btn.innerText = "Inquiry Sent Successfully";
          form.reset();
          setTimeout(() => {
            btn.style.backgroundColor = "";
            btn.innerText = originalText;
            btn.disabled = false;
          }, 3000);
        }, 1500);
      });
    });
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-8");
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const activePage = document.body.dataset.page || "home";
    const navSlot = document.getElementById("site-nav");
    const footerSlot = document.getElementById("site-footer");

    if (navSlot) {
      navSlot.innerHTML = renderHeader(activePage);
      initMobileMenu();
      initHeaderScroll();
    }
    if (footerSlot) {
      footerSlot.innerHTML = renderFooter();
    }

    initForms();
    initReveal();
  });
})();
