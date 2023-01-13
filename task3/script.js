const trafficLightToggle = document.querySelector('#trafficLight');

trafficLightToggle.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightToggle.style.background = ('green');
    trafficLightToggle.removeEventListener('click', makeGreen);
    console.log('зеленый');
    trafficLightToggle.addEventListener('click', makeYellow);
   }

function makeYellow() {
    trafficLightToggle.style.background = ('yellow');
    trafficLightToggle.removeEventListener('click', makeYellow);
    console.log('желтый');
    trafficLightToggle.addEventListener('click', makeRed);    
}

function makeRed() {
    trafficLightToggle.style.background = ('red');
    trafficLightToggle.removeEventListener('click', makeRed);
    console.log('красный');
    trafficLightToggle.addEventListener('click', makeGreen);
}