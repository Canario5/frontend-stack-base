import { gsap } from 'gsap';

export function initMobileMenu() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainMenu = document.querySelector('.main-nav');
  const menuLinks = document.querySelectorAll('.main-nav__link');
  const mobileBreakpoint = 767;

  if (!menuToggle || !mainMenu) return;

  let isMenuOpen = false;

  function isMobile() {
    return window.innerWidth <= mobileBreakpoint;
  }

  function openMenu() {
    isMenuOpen = true;
    menuToggle.setAttribute('aria-expanded', 'true');
    mainMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; //* this disabling/enabling scrolling
    gsap.to(mainMenu, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });

    if (isMobile()) {
      menuLinks.forEach((link) => link.setAttribute('tabindex', '0'));
    }
  }

  function closeMenu() {
    isMenuOpen = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    mainMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    gsap.to(mainMenu, { y: '-100%', opacity: 0, duration: 0.2, ease: 'power2.in' });

    if (isMobile()) {
      menuLinks.forEach((link) => link.setAttribute('tabindex', '-1'));
    }
  }

  function resetMenu() {
    if (isMobile()) {
      closeMenu();
      mainMenu.style.display = '';
    } else {
      isMenuOpen = false;
      menuToggle.setAttribute('aria-expanded', 'false');
      mainMenu.setAttribute('aria-hidden', 'false');
      mainMenu.style.transform = '';
      mainMenu.style.opacity = '';
      mainMenu.style.display = 'block';
      document.body.style.overflow = '';

      menuLinks.forEach((link) => link.setAttribute('tabindex', '0'));
    }
  }

  function toggleMenu() {
    if (!isMobile()) return;
    isMenuOpen ? closeMenu() : openMenu();
  }

  function handleLinkClick() {
    if (isMobile() && isMenuOpen) closeMenu();
  }

  menuToggle.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', handleLinkClick);
  });

  window.addEventListener('resize', resetMenu);

  resetMenu();

  return function cleanup() {
    menuToggle.removeEventListener('click', toggleMenu);
    menuLinks.forEach((link) => link.removeEventListener('click', handleLinkClick));
    window.removeEventListener('resize', resetMenu);
  };
}
