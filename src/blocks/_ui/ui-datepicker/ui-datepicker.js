import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru'

export default function uiDatepicker() {
  // datepicker settings
  const tomorrowDate = new Date().fp_incr(1)
  const defaultSettings = {
    locale: Russian,
    defaultDate: 'today',
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

  // datepicker init
  const datepickersSingle = document.querySelectorAll('.ui-datepicker--single')
  const datepickersRange = document.querySelectorAll('.ui-datepicker--range')
  const datepickersTime = document.querySelectorAll('.ui-datepicker--time')
  for (const datepicker of datepickersSingle) {
    const datepickerSingle = datepicker.querySelector('input')
    flatpickr(datepickerSingle, defaultSettings)
  }
  for (const datepicker of datepickersRange) {
    const datepickerRange = datepicker.querySelector('input')
    flatpickr(datepickerRange, Object.assign({}, defaultSettings, rangeSettings))
  }
  for (const datepicker of datepickersTime) {
    const datepickerTime = datepicker.querySelector('input')
    flatpickr(datepickerTime, timeSettings)
  }
}
