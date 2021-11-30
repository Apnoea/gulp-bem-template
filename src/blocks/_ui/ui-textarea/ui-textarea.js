export default function uiTextarea() {
  const textareas = document.querySelectorAll('.ui-textarea')
  if (textareas) {
    for (const textarea of textareas) {
      const counter = textarea.querySelector('.ui-textarea__counter')
      const maxLength = textarea.querySelector('textarea').getAttribute('maxlength')
      counter.textContent = maxLength

      textarea.addEventListener('input', function (event) {
        const length = event.target.value.length
        counter.textContent = maxLength - length
      })
    }
  }
}
