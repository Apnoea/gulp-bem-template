import Swiper from 'swiper/bundle'

export default function sliderInit() {
  const swiperSlider = new Swiper('.slider .swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
}
