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
