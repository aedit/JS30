const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const weekday = document.querySelector('.weekday')
const month = document.querySelector('.month')
const day = document.querySelector('.day')
const year = document.querySelector('.year')

const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

setInterval(() => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  weekday.textContent = days[date.getDay()]
  day.textContent = date.getDate()
  month.textContent = months[date.getMonth()]
  year.textContent = date.getFullYear()

  const secondDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  second.textContent = seconds

  const minuteDegrees = (minutes / 60) * 360 + 90
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
  minute.textContent = minutes

  const hourDegrees = (hours / 12) * 360 + 90 + minuteDegrees / 30
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
  hour.textContent = hours
}, 1000)

if (window.innerWidth < 768) {
  const button = document.getElementsByTagName('button')
  const analog = document.querySelector('.analog-clock')
  const digital = document.querySelector('.digital-clock')
  button[0].textContent = 'Digital'
  digital.classList.add('invisible')

  function convert() {
    if (button[0].textContent === 'Digital') {
      button[0].textContent = 'Analog'
      digital.classList.remove('invisible')

      analog.classList.add('invisible')
    } else if (button[0].textContent === 'Analog') {
      button[0].textContent = 'Digital'
      analog.classList.remove('invisible')
      digital.classList.add('invisible')
    }
  }
}
