(function() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.header__toggle');
  const menuNav = document.querySelector('.header__nav');
  
  if (menuToggle && menuNav) {
    const closeMenu = () => {
      menuNav.classList.remove('header__nav--open');
      menuToggle.classList.remove('header__toggle--active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      menuNav.classList.add('header__nav--open');
      menuToggle.classList.add('header__toggle--active');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };

    menuToggle.addEventListener('click', () => {
      menuNav.classList.contains('header__nav--open') ? closeMenu() : openMenu();
    });

    menuNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
      if (header && !header.contains(e.target) && menuNav.classList.contains('header__nav--open')) {
        closeMenu();
      }
    });
  }

  document.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabContainer = tab.closest('[class*="__"]');
      if (!tabContainer) return;
      
      const blockName = tabContainer.className.split('__')[0];
      const targetPanelId = `philosophy-content-${tab.dataset.tab}`;
      
      document.querySelectorAll(`.${blockName}__tab`).forEach(t => {
        t.classList.remove(`${blockName}__tab--active`);
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add(`${blockName}__tab--active`);
      tab.setAttribute('aria-selected', 'true');
      
      document.querySelectorAll(`.${blockName}__panel`).forEach(panel => {
        panel.classList.toggle(`${blockName}__panel--active`, panel.id === targetPanelId);
      });
    });
  });
})();
