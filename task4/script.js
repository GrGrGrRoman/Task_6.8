const textLink = document.querySelector('#link'); //находим нужный элемент
textLink.addEventListener('click', function(event) {
    const resultText = prompt('Введите текст ссылки'); //навешиваем обработчик на событие
    console.log(resultText); //проверяем создание переменной с введеным текстом
    textLink.textContent = resultText; //заменяем текст ссылки
    event.preventDefault(); //предотвращаем поведение по умолчанию, т.е. переход по ссылке
})



