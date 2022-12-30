// ДЗ 3. Числа та рядки

// TASK-1 Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let firstName = prompt('What is your name?');
let lastName = prompt('What is your last name?');
let age = prompt('How old are you?');

alert('My name is ' + firstName + ' ' + lastName + '. I am ' + age + '.');

// TASK-2 Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let num = prompt('Ведіть 5 значне число', [12345]);
let a, b, c, d, e;

function showNumber (arr) {

    while (arr.length !== 5) {
        alert('Ввели не правильне число, потрібно п`ятизначне!');
        arr = prompt('Ведіть 5 значне число', [12345]);

    }

    if (arr.length === 5) {

        // let a, b, c, d, e;

        a = arr[0];
        b = arr[1];
        c = arr[2];
        d = arr[3];
        e = arr[4];

        return `${a}   ${b}   ${c}   ${d}   ${e}`;
    // Пробілов більше щоб був замітний результат в alert().
    }

}

alert(showNumber(num));


