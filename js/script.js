let year, city, favoriteSport;

year = prompt('Вкажіть дату свого народження', '1999 р.');
if (year === null || !year) {
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

city = prompt('Вкажіть місто в кому живете', 'Лондон');
if (city === null || !city) {
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

if (city !== null && city) {

    city = capitalize(city)

    switch (city) {
        case 'Лондон':
            alert('Ти живеш у столиці Великої Британії');
            break;
        case 'Київ':
            alert('Ти живеш у столиці України');
            break;
        case 'Вашингтон':
            alert('Ти живеш у столиці США');
            break;
        default:
            alert(`Ти живеш у місті ${city}`);
            break;
    }
}

favoriteSport = prompt('Вкажіть ваш улюблений вид спорту', 'Футбол');
if (favoriteSport === null || !favoriteSport) {
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

switch (favoriteSport) {
    case 'Футбол':
        alert('Круто! Хочеш стати як Лионель Месси');
        break;
    case 'Баскетбол':
        alert('Круто! Хочеш стати як Майкл Джордан');
        break;
    case 'Хокей':
        alert('Круто! Хочеш стати як Вейн Ґрецкі');
        break;
    default:
        break;
}

function capitalize (str) {
    let result;
    str = str.trim();
    result = str[0].toUpperCase() + str.slice(1);
    return result;
}

let answer1 = year ? `Твій вік ${year}` : 'Ти не вказав свій вік'
let answer2 = city ? `Ти живеш в ${city}` : 'Ти не вказав місто в якому ти живеш'
let answer3 = favoriteSport ? `Твій улюблений спорт ${favoriteSport}` : 'Ти не вказав свій улюблений спорт'

alert(`${answer1}, ${answer2}, ${answer3}`);