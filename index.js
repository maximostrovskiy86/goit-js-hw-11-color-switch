const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
]

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
}

let timerId = null;
let count = 0;

const startRandomColor = () => {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
        count++;
        console.log(count);
    }, 1000);

}

const endRandomColor = () => {
    refs.startBtn.disabled = false;
    clearInterval(timerId);
}

refs.startBtn.addEventListener('click', startRandomColor);
refs.stopBtn.addEventListener('click', endRandomColor);


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () => {
    const arrayColors = colors.map(color => color);
    return arrayColors[randomIntegerFromInterval(0, arrayColors.length - 1)];
}
