const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey (length, characters) {
    let key = '';
    if (!isNaN(length) && length > 0) {
        if (typeof characters === 'string') {
            for (let i = 0; i < length; i++) {
                key += characters[Math.floor(Math.random() * characters.length)];
            }
            return key;
        } else
        return key = 'Error! Character isn\'t a string '
    }
    return key = 'Error! Enter number > 0.'
}


const key = generateKey(-1, characters);
const key2 = generateKey(10, characters);
const key3 = generateKey(10, 123);
console.log(key);
console.log(key2);
console.log(key3);

// V2

//Намагався розібратись з замиканням, написав ось таку функцию, також прокинув коллбек .
//
// Чи є це замиканням?
// Функиця generateKey. Це колбек?


function Generate (characters) {
    let _characters = characters;
    let key = '';

    const generateNum = () => {
        return Math.floor(Math.random() * _characters.length);
    }
    const generateKey = (length) => {
        for (let i = 0; i < length; i++) {
            key += characters[generateNum()];
        }
        return key;
    }

    return {

        getKey () {
            return key;
        },

        setKey (length) {
            generateKey(length)
        }
    }
}

const generate = Generate(characters);

generate.setKey(20);
console.log(generate.getKey());

const generate2 = Generate(characters);
generate2.setKey(30);
console.log(generate2.getKey());


