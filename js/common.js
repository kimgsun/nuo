(function () {
  const header = document.querySelector(".header");
  const menuToggle = document.querySelector(".header__toggle");
  const menuNav = document.querySelector(".header__nav");

  if (menuToggle && menuNav) {
    const closeMenu = () => {
      menuNav.classList.remove("header__nav--open");
      menuToggle.classList.remove("header__toggle--active");
      menuToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-menu-open");
    };

    const openMenu = () => {
      menuNav.classList.add("header__nav--open");
      menuToggle.classList.add("header__toggle--active");
      menuToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("is-menu-open");
    };

    menuToggle.addEventListener("click", () => {
      menuNav.classList.contains("header__nav--open")
        ? closeMenu()
        : openMenu();
    });

    menuNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (e) => {
      if (
        header &&
        !header.contains(e.target) &&
        menuNav.classList.contains("header__nav--open")
      ) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll("[data-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabContainer = tab.closest('[class*="__"]');
      if (!tabContainer) return;

      const blockName = tabContainer.className.split("__")[0];
      const targetPanelId = `philosophy-content-${tab.dataset.tab}`;

      document.querySelectorAll(`.${blockName}__tab`).forEach((t) => {
        t.classList.remove(`${blockName}__tab--active`);
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add(`${blockName}__tab--active`);
      tab.setAttribute("aria-selected", "true");

      document.querySelectorAll(`.${blockName}__panel`).forEach((panel) => {
        panel.classList.toggle(
          `${blockName}__panel--active`,
          panel.id === targetPanelId,
        );
      });
    });
  });

  $(function () {
    const $window = $(window);
    const checkScrollAnimation = () => {
      const windowHeight = $window.height();
      const scrollTop = $window.scrollTop();
      $("[data-scroll-animate]").each(function () {
        const $el = $(this);
        if ($el.hasClass("is-animated") || $el.data("animating")) return;
        const elementTop = $el.offset().top;
        const elementHeight = $el.outerHeight();
        const triggerPoint = scrollTop + windowHeight - 100;
        if (
          triggerPoint > elementTop &&
          scrollTop < elementTop + elementHeight
        ) {
          const delay = $el.data("scroll-delay") || 0;
          $el.data("animating", true);
          setTimeout(() => {
            $el.addClass("is-animated");
            $el.removeData("animating");
          }, delay);
        }
      });
    };
    $window.on("scroll", checkScrollAnimation);
    checkScrollAnimation();
    window.refreshScrollAnimations = checkScrollAnimation;
  });
})();
