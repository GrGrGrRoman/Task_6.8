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
//решение мне не нравится, но сделал так, как умею на данный момент
const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightGreen = document.querySelector('#trafficLightGreen');

trafficLightRed.addEventListener('click', () => {
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');
    });

trafficLightYellow.addEventListener('click', () => {
    trafficLightYellow.style.background = ('yellow');
    trafficLightRed.style.background = ('black');
    trafficLightGreen.style.background = ('black');
});

trafficLightGreen.addEventListener('click', () => {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');
});