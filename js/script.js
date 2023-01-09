let operation, a, b;

const OPERATIONS = {
    add: ['+', 'add'], sub: ['-', 'sub'], mul: ['*', 'mul'], div: ['/', 'div']
}

let operationToggle = false;

do {
    operation = prompt('Що зробити?.(Приклад : +,-,/,*,add,sub,mul,div)').trim();

    for (let i = 0; i <= 2; i++) {
        for (let key in OPERATIONS) {
            if (OPERATIONS[key][i] === operation) {
                operationToggle = true;
                break;
            }
        }
    }

    if (!operationToggle) {
        alert('Не правильно ввели оператора, чи такої дії не існує!');
    }
} while (!operationToggle);

do {
    a = prompt('Введіть ПЕРШЕ число').trim();

    if (isNaN(a) || !a) {
        alert('Не вірно вказане ПЕРШЕ число, перевіте правельність і введть ще раз!');
    }
} while (isNaN(a) || !a);

do {
    b = prompt('Введіть ДРУГЕ число').trim();

    if (isNaN(b) || !b) {
        alert('Не вірно вказане ДРУГЕ число, перевіте правельність і введть ще раз!');
    }

    if (b === '0') {
        if (OPERATIONS.div[0] === operation) {
            do {
                if (b === '0') {
                    alert('На НОЛЬ ділити не можна!')
                }
                b = prompt('Введіть ДРУГЕ число').trim();
                if (isNaN(b) || !b) {
                    alert('Не вірно вказане ДРУГЕ число, перевіте правельність і введть ще раз!');
                }

            } while (b === '0')

        }
    }

} while (isNaN(b) || !b.trim());


function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

function mul (a, b) {
    return a * b;
}

function div (a, b) {
    return a / b;
}

function calculate (a, b, operation) {
    let result = null;


    for (let i = 0; i <= 2; i++) {
        for (let key in OPERATIONS) {
            if (OPERATIONS[key][i] === operation) {
                switch (operation) {
                    case OPERATIONS.add[i]:
                        result = add(a, b);
                        break;
                    case OPERATIONS.sub[i]:
                        result = add(a, b);
                        break;
                    case OPERATIONS.mul[i]:
                        result = mul(a, b);
                        break;
                    case OPERATIONS.div[i]:
                        result = div(a, b);
                        break;
                }
            }
        }
    }
    if (Number.isInteger(result)) {
        return result;

    }
    return result.toFixed(1)
}

alert(calculate(+a, +b, operation))

