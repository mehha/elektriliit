import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
export function handleSwiper() {
  const swiperWrapper = document.querySelector('.swiper')

  if (!swiperWrapper) {
    return
  }

  new Swiper(swiperWrapper, {
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 20,
      },
      540: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
      // 768: {
      //   slidesPerView: 4.3,
      // },
      // 1200: {
      //   //slidesPerView: slidesPerView,
      //   slidesPerView: 2,
      // },
    },
  });
}
