import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@fancyapps/fancybox'
import Inputmask from 'inputmask'
import noUiSlider from 'nouislider'
import 'parsleyjs'
import 'select2'
import Swiper from 'swiper/bundle'
import 'tooltipster'
import './_backend'

$(function () {
  uiSelects()
  inputMask()
  checkInputFill()
  validation()
  sliderInit()
})

function uiSelects () {
  const selects = $('.ui-select select')
  selects.each(function () {
    const current = $(this)
    const currentWrap = current.parent('.ui-select')
    current.select2({
      minimumResultsForSearch: Number.POSITIVE_INFINITY,
      width: 'auto',
      dropdownAutoWidth: true,
      dropdownParent: currentWrap
    })
  })
}

function inputMask () {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
  }).mask('#phone')
}

function checkInputFill () {
  $('.ui-input input').val('')
  $('input').on('change', function () {
    if ($(this).val() !== '') {
      $(this).addClass('filled')
    } else {
      $(this).removeClass('filled')
    }
  })
}

function validation () {
  $('form').parsley()
}

function sliderInit () {
  const swiperSlider = new Swiper('.swiper-container', {
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
