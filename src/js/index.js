import $ from 'jquery'
import '@fancyapps/fancybox'
import 'lazysizes'
import noUiSlider from 'nouislider'
import 'tooltipster'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiSelects from '../blocks/_ui/ui-select/ui-select'
import { inputMask, checkInputFill, validation } from '../blocks/_ui/ui-input/ui-input'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import sliderInit from '../blocks/slider/slider'
import './_backend'

$(function () {
  uiDatepicker()
  uiSelects()
  uiTextarea()
  inputMask()
  checkInputFill()
  validation()
  sliderInit()
})
