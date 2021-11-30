import noUiSlider from 'nouislider'

export default function uiRange() {
  const ranges = document.querySelectorAll('.ui-range .ui-range-body')
  for (const range of ranges) {
    noUiSlider.create(range, {
      step: 1,
      start: [20, 80],
      connect: true,
      range: {
        min: 0,
        max: 100
      },
      format: {
        to: Number,
        from: Number
      }
    })

    const rangeValues = [
      range.parentElement.querySelector('.ui-range-value-lower'),
      range.parentElement.querySelector('.ui-range-value-upper')
    ]
    range.noUiSlider.on('update', function (values, handle) {
      rangeValues[handle].innerHTML = values[handle]
    })
  }
}
