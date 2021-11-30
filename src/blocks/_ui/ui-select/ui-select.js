import 'select2'

export default function uiSelects() {
  const selects = document.querySelectorAll('.ui-select select')
  for (const select of selects) {
    const selectParent = select.parentElement
    $(select).select2({
      minimumResultsForSearch: Number.POSITIVE_INFINITY,
      width: 'auto',
      dropdownAutoWidth: true,
      dropdownParent: selectParent
    })
  }
}
