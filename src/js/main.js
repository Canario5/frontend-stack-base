import '../styles/main.scss';

import { initAnimations } from './animations/initAnimations.js';
import { initStaffSlider } from './swiper/staffSlider.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initStaffSlider();
});
