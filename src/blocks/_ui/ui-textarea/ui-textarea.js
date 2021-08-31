export default function uiTextarea() {
  const textareas = document.querySelectorAll('.ui-textarea')
  if (textareas) {
    textareas.forEach(function (element) {
      const textarea = element.querySelector('textarea')
      const counter = element.querySelector('.ui-textarea__counter')
      const maxLength = textarea.getAttribute('maxlength')
      counter.textContent = maxLength

      textarea.addEventListener('input', function (event) {
        const length = event.target.value.length
        counter.textContent = maxLength - length
      })
    })
  }
}
