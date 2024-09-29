let date = new Date();
let hours = date.getHours();

let greetingMessage;

if (hours < 12) {
    greetingMessage = 'Good Morning';
} else if (hours < 15) {
    greetingMessage = 'Hey! I think we are in class!';
} else {
    greetingMessage = 'Hello! Hope you are having a good day!';
}

document.getElementById('greeting').innerHTML = greetingMessage;

let a, b;

function getNumber() {
    a = Number(document.getElementById('number1').value);
    b = Number(document.getElementById('number2').value);
}

function addition() {
    getNumber();
    let result = a + b;
    alert('The sum of ' + a + ' and ' + b + ' is: ' + result);
}

function subtraction() {
    getNumber();
    let result = a - b;
    alert('The difference between ' + a + ' and ' + b + ' is: ' + result);
}

function multiplication() {
    getNumber();
    let result = a * b;
    alert('The product of ' + a + ' and ' + b + ' is: ' + result);
}

function division() {
    getNumber();
    if (b !== 0) {
        let result = a / b;
        alert('The quotient of ' + a + ' / ' + b + ' is: ' + result);
    } else {
        alert('Error: Division by zero is not allowed.');
    }
}
