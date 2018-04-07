import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils from 'react-day-picker/moment'
import 'moment/locale/ru'
import {
  DEFAULT_LOCALE as LOCALE,
  BACKEND_DATE_FORMAT,
  FRONTEND_DATE_FORMAT,
  FRONTEND_TIME_FORMAT,
} from '../../config'
import moment from 'moment'
moment.locale(LOCALE)

export const DisplayDateInput = ({value, onChange, placeholder}) => (
  <DayPickerInput
    value={value?moment(value, BACKEND_DATE_FORMAT).format(FRONTEND_DATE_FORMAT):""}
    placeholder={placeholder}
    dayPickerProps={{localeUtils:MomentLocaleUtils, locale:"ru"}}
    onDayChange={(day: date, modifiers: Object) => {onChange(day?moment(day).format(BACKEND_DATE_FORMAT):"")}}
    />
)

export const DisplayDate = ({date}) => {
  if (!date) return false
  return moment(date, BACKEND_DATE_FORMAT).format(FRONTEND_DATE_FORMAT)
}

export const DisplayTime = ({timestamp, msec}) => {
  if (!timestamp) return false
  return moment(timestamp).format(FRONTEND_TIME_FORMAT + (msec?".SSS":""))
}
