import Swiper, {Pagination} from 'swiper';
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
        slidesPerView: 1.3,
        // spaceBetween: 20,
      },
      540: {
        slidesPerView: 2.3,
        // spaceBetween: 20,
      },
      // 768: {
      //   slidesPerView: 4.3,
      // },
      1200: {
        //slidesPerView: slidesPerView,
        slidesPerView: 4.3,
      },
    },
  });
}
