document.querySelector('#consoleLog').addEventListener('click', () => {
    alert("Вывод информации в консоль");
})

document.querySelector('#alert').addEventListener('click', () => {
    alert("Вывод информации во всплывающем окне браузера");
})

document.querySelector('#prompt').addEventListener('click', () => {
    alert("Вывод диалогового окна с текстом, с запросом на ввод текста и кнопками ОК/Отмена");
})