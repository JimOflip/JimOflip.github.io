//calculatrice
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let number1 = event.target.number1.value
    let number2 = event.target.number2.value
    let operator = event.target.operator.value
    let result = eval(number1 + operator + number2)
    alert(number1 + operator + number2 + "=" + result)
})

//hiddenbutton
const visible = document.querySelector('.visible');
const none = document.querySelector('.none');
none.addEventListener('click', function () {
    form.classList.add('hidden');
})
visible.addEventListener('click', function () {
    form.classList.remove('hidden')
})

