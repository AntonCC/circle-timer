const halfCircles = document.querySelectorAll('.half-circle')
const halfCircleTop = document.querySelector('.half-circle-top')
const progressbarCircle = document.querySelector('.progressbar-circle')
const startCountdown = document.querySelector('.start-countdown')

const startingMinutes = 29.75
const endingMinutes = 30
let time = startingMinutes * 60

let startTimer; 

function updateCountdown() {
  const minutes = Math.floor(time / 60)
  let seconds = time % 60

  seconds = seconds < 10 ? '0' + seconds : seconds

  progressbarCircle.innerText = `${minutes}:${seconds}`
  time++

  const timeToDegrees = (time / endingMinutes) * 360

  halfCircles.forEach(el => {
    el.style.transform = `rotate(${timeToDegrees}deg)`

    if(timeToDegrees >= 180) {
      halfCircles[0].style.transform = 'rotate(180deg)'
      halfCircleTop.style.opacity = '0'
    } else {
      halfCircleTop.style.opacity = '1'
    }
  })

  if(time === endingMinutes * 60 + 1) {
    clearInterval(startTimer)
  }

  if(time === endingMinutes * 60) {
    console.log('If statement to end fired!')
  }
}

startCountdown.addEventListener('click', () => {
  updateCountdown()
  startTimer = setInterval(updateCountdown, 1000)
})

// document.addEventListener('scroll', () => {
  // const pageViewportHeight = window.innerHeight
  // const pageHeight = document.documentElement.scrollHeight
  // const scrolledPortion = window.pageYOffset
  
  // const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 360
  

  // halfCircles.forEach(el => {
  //   el.style.transform = `rotate(${scrolledPortionDegree}deg)`

  //   if(scrolledPortionDegree >= 180) {
  //     halfCircles[0].style.transform = 'rotate(180deg)'
  //     halfCircleTop.style.opacity = '0'
  //   } else {
  //     halfCircleTop.style.opacity = '1'
  //   }
  // })
// })

window.addEventListener('load', () => {

})