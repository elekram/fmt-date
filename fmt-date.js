export default {
  date (dateObj) {
    const formattedDate = `${getDayWithOrdinal(dateObj)} ${getMonthName(dateObj)} ${dateObj.getFullYear()}`
    return formattedDate
  },
  time (dateObj) {
    return getTime(dateObj)
  },
  dateTime (dateObj) {
    const dateTime = `${this.date(dateObj)}, ${this.time(dateObj)}`
    return dateTime
  }
}

function getTime (dateObj) {
  let meridiem
  let mins
  let hours = dateObj.getHours()
  const minutes = dateObj.getMinutes().toString()

  mins = minutes <= 9 ? minutes.padStart(2, 0) : mins = minutes
  meridiem = hours <= 11 ? 'am' : 'pm'

  if (dateObj.getHours() <= 11) {
    meridiem = 'am'
  } else {
    meridiem = 'pm'
  }

  hours = hours % 12
  if (!hours) hours = 12

  const time = `${hours}:${mins} ${meridiem}`
  return time
}

function getDayWithOrdinal (date) {
  let dateWithOrdinal

  const ordinals = {
    1: 'st',
    2: 'nd',
    3: 'rd',
    21: 'st',
    22: 'nd',
    23: 'rd',
    31: 'st'
  }

  if (date.getDate() in ordinals) {
    dateWithOrdinal = date.getDate() + ordinals[date.getDate()]
  } else {
    dateWithOrdinal = date.getDate() + 'th'
  }

  return dateWithOrdinal
}

function getMonthName (date) {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  const monthName = months[date.getMonth()]
  return monthName
}
