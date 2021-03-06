const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const NOTIFICATION_DELAY = 1000;
let intervalId = null;
let isActive = false;

const startBtn = document.querySelector('[data-action="start"]')
const stopBtn = document.querySelector('[data-action="stop"]')
  

startBtn.addEventListener('click', onStartColorChanges)
stopBtn.addEventListener('click', onStoptColorChanges)
  
function onStartColorChanges() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    const color = randomIntegerFromInterval(0, colors.length - 1)
    document.body.style.backgroundColor = colors[color]
  }, NOTIFICATION_DELAY);
}
   
  
  function onStoptColorChanges(){
    clearInterval(intervalId)
    isActive = false;
  }

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  