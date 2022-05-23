import $ from 'jquery'
import 'lazysizes'
import uiDatepicker from '../blocks/_ui/ui-datepicker/ui-datepicker'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import uiRange from '../blocks/_ui/ui-range/ui-range'
import uiSelect from '../blocks/_ui/ui-select/ui-select'
import uiTextarea from '../blocks/_ui/ui-textarea/ui-textarea'
import uiTooltip from '../blocks/_ui/ui-tooltip/ui-tooltip'
import galleryScripts from '../blocks/gallery/gallery'
import sliderInit from '../blocks/slider/slider'
import './_backend'

document.addEventListener('DOMContentLoaded', function () {
  uiDatepicker()
  uiInput()
  uiRange()
  uiSelect()
  uiTextarea()
  uiTooltip()
  sliderInit()
  galleryScripts()
})
