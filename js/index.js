let daysP = document.getElementById("days")
let hoursP = document.getElementById("hours")
let minutesP = document.getElementById("minutes")
let secondsP = document.getElementById("seconds")
var meetupDate = new Date("June 27, 2020")

function updateTimer() {
  let now = new Date().getTime()
  let dt = meetupDate - now

  let days = Math.floor(dt / (1000 * 60 * 60 * 24))
  let hours = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((dt % (1000 * 60)) / 1000)

  daysP.innerHTML = days
  hoursP.innerHTML = hours
  minutesP.innerHTML = minutes
  secondsP.innerHTML = seconds
}

setInterval(updateTimer, 1000)