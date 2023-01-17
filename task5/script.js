const field = document.querySelector('#field'); //поле ввода
const button = document.querySelector('#button'); //кнопка
const duplicateField = document.querySelector('#duplicateField'); //текстовое поле

field.addEventListener('keydown', (event) => {
    //console.log(event.key);
    duplicateField.textContent = field.value;
    
})

button.addEventListener('click', (event) => {
    console.log(duplicateField.textContent);
    field.value = '';
    duplicateField.textContent = '';
    event.preventDefault();
})
