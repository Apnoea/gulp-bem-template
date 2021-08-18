import Inputmask from 'inputmask'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/ru'

function inputMask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
  }).mask('#phone')
}

function checkInputFill() {
  $('.ui-input input[type!="submit"]').not('.flatpickr-input').val('')
  $('input').on('change', function () {
    if ($(this).val() !== '') {
      $(this).addClass('filled')
    } else {
      $(this).removeClass('filled')
    }
  })
}

function validation() {
  $('form').parsley()
}

export { inputMask, checkInputFill, validation }
