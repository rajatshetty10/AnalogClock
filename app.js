// Analog Clock
setInterval(setClock, 1000);

// Dark Theme Switch EventListener
document
  .querySelector('input[type="checkbox"]')
  .addEventListener('change', dark);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
console.log(secondHand);

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  let time = element.style.setProperty('--rotation', rotationRatio * 360);
  console.log(time);
}

setClock();

// Dark Theme Toggle
function dark() {
  let checkBox = document.querySelector('input[type="checkbox"]').checked;
  if (checkBox) {
    document.querySelector('body').style.background = '#333';
    document.querySelector('body').style.transition = '0.5s ease';
    document.querySelector('.clock').style.boxShadow =
      '0 2px 10px 2px #39FF14, 0 -2px 10px 2px #39FF14';
  } else {
    document.querySelector('body').style.background = 'cornsilk';
    document.querySelector('body').style.transition = '0.5s ease';
    document.querySelector('.clock').style.boxShadow =
      '0 2px 10px 2px #333, 0 -2px 10px 2px #333';
  }
}
