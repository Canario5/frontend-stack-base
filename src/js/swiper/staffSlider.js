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
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    a11y: {
      prevSlideMessage: 'prev',
      nextSlideMessage: 'Next',
      paginationBulletMessage: 'Move to {{index}}',
    },
  });
}
