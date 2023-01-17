const textLink = document.querySelector('#link'); //находим нужный элемент
textLink.addEventListener('click', (event) => { //навешиваем обработчик на событие
    const resultText = prompt('Введите текст ссылки'); //записываем в константу текст из диалогового окна
    console.log(resultText); //проверяем создание переменной с введеным текстом
    textLink.textContent = resultText; //заменяем текст ссылки
    event.preventDefault(); //предотвращаем поведение по умолчанию, т.е. переход по ссылке
})