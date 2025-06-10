import Swiper from 'swiper/bundle';

export function initStaffSlider() {
  return new Swiper('.staff-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Předchozí člen týmu',
      nextSlideMessage: 'Další člen týmu',
      paginationBulletMessage: 'Přejít na snímek {{index}}',
    },
  });
}
