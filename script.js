setInterval(setClock, 1000)

const houeHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minutesRatio = ( secondRatio + currentDate.getMinutes()) / 60
    const hoursRatio = ( minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(houeHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()