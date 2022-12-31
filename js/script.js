let name, age, question;

name = prompt('Whats your name?');
age = +prompt('How old are you?');
question = confirm('You smoke?');

if(age >= 18 && question) {
    alert(`Hi ${name}, well, you chose this path yourself…`);
} else if (age >= 18 && !question) {
    alert(`Hi ${name}, great! You probably also play sports!`);
} else if (age < 18 && question) {
    alert(`Hello ${name}! Do the parents know about it?`);
} else alert(`Hello ${name}! That's right, now the main thing is to study well.`);