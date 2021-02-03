import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@fancyapps/fancybox'
import noUiSlider from 'nouislider'
import 'tooltipster'
import './_backend'
import uiSelects from '../blocks/ui-select/ui-select'
import { inputMask, checkInputFill, validation } from '../blocks/ui-input/ui-input'
import sliderInit from '../blocks/slider/slider'

$(function () {
  uiSelects()
  inputMask()
  checkInputFill()
  validation()
  sliderInit()
})
