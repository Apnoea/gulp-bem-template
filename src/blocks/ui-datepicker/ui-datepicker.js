import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'

export default function uiDatepicker() {
  const datepickers = $('.ui-datepicker')
  datepickers.each(function () {
    const current = $(this)
    const currentInput = $('.ui-datepicker__ui-input input')
    const currentSingle = current.parent().find('.ui-datepicker--single').find(currentInput)
    const currentTime = current.parent().find('.ui-datepicker--time').find(currentInput)
    const currentRange = current.parent().find('.ui-datepicker--range').find(currentInput)
    const tomorrowDate = new Date().setDate(new Date().getDate() + 1)
    const defaultSettings = {
      locale: Russian,
      defaultDate: 'today',
      position: 'auto right',
      dateFormat: 'd.m.Y',
      disableMobile: 'true'
    }
    const rangeSettings = {
      mode: 'range',
      defaultDate: ['today', tomorrowDate]
    }
    const timeSettings = {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      defaultDate: '12:00',
      time_24hr: true
    }
    flatpickr(currentSingle, defaultSettings)
    flatpickr(currentTime, timeSettings)
    flatpickr(currentRange, Object.assign({}, defaultSettings, rangeSettings))
  })
}
