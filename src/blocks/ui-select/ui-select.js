import 'select2'

export default function uiSelects() {
  const selects = $('.ui-select select')
  selects.each(function () {
    const current = $(this)
    const currentWrap = current.parent('.ui-select')
    current.select2({
      minimumResultsForSearch: Number.POSITIVE_INFINITY,
      width: 'auto',
      dropdownAutoWidth: true,
      dropdownParent: currentWrap
    })
  })
}
