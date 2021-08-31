import Inputmask from 'inputmask'
import 'parsleyjs'
import 'parsleyjs/dist/i18n/ru'

export default function uiInput() {
  inputMask()
  checkInputFill()
  validation()
}

function inputMask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false
  }).mask('#phone')
}

function checkInputFill() {
  const uiInputs = document.querySelectorAll('.ui-input')
  if (uiInputs) {
    uiInputs.forEach(function (element) {
      const uiInput = element.querySelector('input')
      toggleClassFilled(uiInput)
      uiInput.addEventListener('input', function () {
        toggleClassFilled(uiInput)
      })
    })
  }
  function toggleClassFilled(input) {
    input.value !== '' ? input.classList.add('filled') : input.classList.remove('filled')
  }
}

function validation() {
  $('form').parsley()
}
