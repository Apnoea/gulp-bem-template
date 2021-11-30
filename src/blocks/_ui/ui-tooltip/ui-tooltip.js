import tippy from 'tippy.js'

export default function uiTooltip() {
  const tooltips = document.querySelectorAll('.ui-tooltip button')
  tippy(tooltips)
}
