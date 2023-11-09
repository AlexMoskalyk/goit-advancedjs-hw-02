const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let interval = null;

startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
  if (interval) {
    return;
  }

  startBtn.disabled = true;

  interval = setInterval(changeBackgroundColor, 1000);
}

function stopChangeColor() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  startBtn.disabled = false;
}

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
