import $ from 'jquery'
import '@fancyapps/fancybox'
import 'lazysizes'
import noUiSlider from 'nouislider'
import 'tooltipster'
import uiDatepicker from '../blocks/ui-datepicker/ui-datepicker'
import uiSelects from '../blocks/ui-select/ui-select'
import { inputMask, checkInputFill, validation } from '../blocks/ui-input/ui-input'
import sliderInit from '../blocks/slider/slider'
import './_backend'

$(function () {
  uiDatepicker()
  uiSelects()
  inputMask()
  checkInputFill()
  validation()
  sliderInit()
})
