export default function uiTextarea() {
  if ($('.ui-textarea').length > 0) {
    $('.ui-textarea').each(function () {
      const textarea = this.querySelector('textarea')
      const counter = this.querySelector('.ui-textarea__counter')
      const maxLength = textarea.getAttribute('maxlength')
      counter.textContent = maxLength
      textarea.addEventListener('input', function (event) {
        const length = event.target.value.length
        counter.textContent = maxLength - length
      })
    })
  }
}
