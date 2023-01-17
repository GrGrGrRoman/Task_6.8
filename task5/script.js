const field = document.querySelector('#field'); //поле ввода
const button = document.querySelector('#button'); //кнопка
const duplicateField = document.querySelector('#duplicateField'); //текстовое поле

field.addEventListener('input', () => { //обработчик на событие ввод текста
    duplicateField.textContent = field.value; //присваиваем значение из поля ввода в текстовое поле
    })

button.addEventListener('click', (event) => { //обработчик на событие нажатие на кнопку кнопкой мыши
    event.preventDefault(); //предотвращение отправки формы
    console.log(duplicateField.textContent); //вывод в консоль содержимого текстового поля
    field.value = ''; //очистка поля ввода
    duplicateField.textContent = ''; //очистка текстового поля
})
