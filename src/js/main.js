import '../styles/main.scss';

import { initAnimations } from './animations/initAnimations.js';
import { initStaffSlider } from './swiper/staffSlider.js';
import { initMobileMenu } from './menu/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initStaffSlider();
  initMobileMenu();
});
