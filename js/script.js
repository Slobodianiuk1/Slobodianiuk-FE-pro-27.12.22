// Task 1

function avg (arr) {
	if (Array.isArray(arr) && arr.some(num => typeof num === 'number')) {
		let numArr = arr.filter(el => typeof el === 'number')
		return numArr.reduce((accum, num) => accum += num, 0) / numArr.length;
	}
	return 'ERROR! Is not array.'
}

const array = ['123', 1, 2, 'ferfe', 3, 4, 5, 'few', {user: 'Вася', age: 19}]
const array1 = ['hjk']
console.log('Task 1 -', avg(array));
console.log('Task 1 -', avg(array1));

// Task 2

function doMath (x, znak, y) {
	let result;
	let numOne = parseInt(x);
	let numTwo = parseInt(y);
	switch (znak) {
		case '+':
			result = numOne + numTwo
			break
		case '-':
			result = numOne - numTwo
			break
		case '*':
			result = numOne * numTwo
			break
		case '/':
			result = numTwo <= 0 ? 'Invalid two number' : numOne / numTwo
			break
		case '%':
			result = numOne / 100 * numTwo
			break
		case '^':
			result = numOne ** numTwo
			break
		default:
			break
	}

	return `${numOne} ${znak} ${numTwo} = ${result}`
}


function questions () {
	const operations = ['+', '-', '*', '/', '%', '^']
	let operation, a, b;

	function q1 () {
		operation = prompt('Що зробити?.(Приклад : +,-,/,*)').trim();
		if (operations.includes(operation)) return;
		alert('Зараз немає такої операції, виберить із запропонованих ')
		q1();
	}

	function q2 () {
		a = prompt("Ведить перше число ").trim();
		if (!isNaN(a) && a) return;
		alert('Введить будь ласка число')
		q2()
	}

	function q3 () {
		b = prompt("Введить 2 число").trim();
		if (b === '0' && operation === '/') {
			alert('На ноль ділити не можна')
			q3()
		}
		if (!isNaN(b) && b) return;
		alert('Введить будь ласка число')
		q3()
	}

	q1()
	q2()
	q3()
	alert(doMath(a, operation, b));
}

questions()


// Task 3

function fillArr (extArrLength, intArrLength) {
	let countArr = 0;
	return Array.from(Array(extArrLength), () => {
		++countArr;
		return new Array(intArrLength).fill('')
			.map((el, i) => {
				return prompt(`Введить ${i} (${intArrLength}) елемент масиву ${countArr} (${extArrLength})`)
			})
	})
}

let extArrLength = +prompt('Довжина завнішнього масиву');
let intArrLength = +prompt('Довжина внутрішнього масиву');

console.log(fillArr(extArrLength, intArrLength))


// Task 4

function deleteLetter(str, arr) {
	let deleteLetter = Array.isArray(arr) ? arr.join() : arr;
	let result = '';
	for (let i = 0, strLength = str.trim().length; i < strLength; i++) {
		if (!deleteLetter.includes(str[i])) {
			result += str[i]
		}
	}
	return result
}

function questions2(deleteLetter) {

	let string = question1();
	const array = [];

	function question1() {
		let string = prompt('Ведіть строку');
		if (string) return string;
		alert('Введіть тільки одну літеру');
		question1();
	}

	function question2() {
		let letter = prompt(`Ведіть літеру яку потрібно видалити в строкі "${string}"`)
		if (letter.length === 1) {
			array.push(letter)
			if (confirm('Видалити ще якусь літеру?')) question2()
			return array
		}
		alert('Введіть тільки ОДНУ літеру!!!');
		question2();
	}

	return deleteLetter(string, question2())
}

alert(questions2(deleteLetter));
console.log('task 4 (функция deleteLetter також приймає строку 2 аргументом)' ,deleteLetter('hello world', 'ld'));
