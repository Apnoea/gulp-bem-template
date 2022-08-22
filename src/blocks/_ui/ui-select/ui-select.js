import TomSelect from 'tom-select'

export default function uiSelect() {
  const selects = document.querySelectorAll('.ui-select select')
  for (const select of selects) {
    const tomSelect = new TomSelect(select, {
      onDropdownOpen() {
        const wrapper = select.parentElement.querySelector('.ts-wrapper')
        const list = select.parentElement.querySelector('.ts-dropdown')
        if ((window.innerHeight - wrapper.getBoundingClientRect().top - wrapper.clientHeight) < list.clientHeight) {
          wrapper.classList.add('dropdown-top')
        } else {
          wrapper.classList.remove('dropdown-top')
        }
      },
      onDropdownClose() {
        tomSelect.blur()
      }
    })
  }
}
