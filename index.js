const halfCircles = document.querySelectorAll('.half-circle')
const halfCircleTop = document.querySelector('.half-circle-top')
const progressbarCircle = document.querySelector('.progressbar-circle')
const startCountdown = document.querySelector('.start-countdown')

const startingMinutes = 0
const endingMinutes = 30
let time = startingMinutes * 60

let startTimer; 

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds < 10 ? '0' + seconds : seconds

  progressbarCircle.innerText = `${minutes}:${seconds}`
  time++
  
  let timeToDegrees = (time / 1800) * 360
  console.log('Time is: ', time)
  console.log('Degrees are: ', timeToDegrees)

  halfCircles.forEach(el => {
    el.style.transform = `rotate(${timeToDegrees}deg)`

    if(timeToDegrees >= 180) {
      halfCircles[0].style.transform = 'rotate(180deg)'
      halfCircleTop.style.opacity = '0'
    } else {
      halfCircleTop.style.opacity = '1'
    }
  })

  if(time === endingMinutes * 60) {
    progressbarCircle.innerText = '30:00'
    clearInterval(startTimer)
  }
}

startCountdown.addEventListener('click', () => {
  time = 0
  clearInterval(startTimer)
  updateCountdown()
  startTimer = setInterval(updateCountdown, 1000)
})
