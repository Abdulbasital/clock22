setInterval(setClock, 1000);

let hourHand = document.querySelector('[data-hours-hand]');
let minuteHand = document.querySelector('[data-minutes-hand]');
let secondHand = document.querySelector('[data-seconds-hand]');

function setClock() {
    let dateData = new Date();
    let secondRito = dateData.getSeconds() / 60;
    let minuteRito = (secondRito + dateData.getMinutes()) / 60;
    let hourRito = (minuteRito + dateData.getHours()) / 12;
    // console.log(hourRito, secondRito, minuteRito)
    setR(hourHand, hourRito);
    setR(minuteHand, minuteRito);
    setR(secondHand, secondRito);
}
setClock();

function setR(element, rotationR) {
    element.style.setProperty('--rotation', rotationR * 360);
}
// let dateData = new Date();
// let secondRito = dateData.getSeconds();

// console.log(secondRito);