// 1 TASK

let result = ''
for (let i = 20; i <= 30; i += 0.5) {
    result = result + ' ' + i;
}
alert(result);

// 2 TASK

let result1 = '';
let course = 27;
for (let i = 10; i <= 100; i += 10) {
    result1 =  `${result1} (${i} * ${course} = ${i * course} грн)` ;
}
alert(result1);

// 3 TASK

let number = +prompt('Enter a number');
let result2 = '';
for (let i = 1; i <= 100; i++) {

    let a = Math.pow(i, 2)
    if (a <= number) {
        result2 = result2 + ' ' + i;
    } else {
        alert(`Числа квадрат яких не перевищує числа ${number} - ${result2}`);
        break;
    }
}

// 4 TASK

let number1 = +prompt('Enter a number');

for (let i = 2; i < number1; i++) {
    if (number1 % i === 0) {
        alert(`${number1} НЕ ПРОСТЕ число`);
        break;
    }
    alert(`${number1} ПРОСТЕ число`);
    break;
}

// 5 TASK


let number2 = +prompt('Enter a number');
let result3 = 'false';
for (let i = 1, max = Math.sqrt(number2); i <= max; i++) {
    if ((Math.pow(3, i)) === number2) {
        result3 = 'true';
        break;
    }
}
alert(result3);






