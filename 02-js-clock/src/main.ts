import getByClassName from "./utils/getByClassName";

const secondsHand = getByClassName('second-hand') as HTMLDivElement
const minsHand = getByClassName('min-hand') as HTMLDivElement
const hoursHand = getByClassName('hour-hand') as HTMLDivElement

const setDate = () => {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + 90
  minsHand.style.transform = `rotate(${minsDegrees}deg)`

  const hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
