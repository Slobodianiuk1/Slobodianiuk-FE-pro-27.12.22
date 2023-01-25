const arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4];

// Видалить елемент по індексу
function removeElement (arr, indexEl) {
    arr.splice(indexEl, 1);
}

removeElement(arr, 5);
console.log(arr);

// Видалить всі елемети з масиву яки передать як аргумент в функицію
function removeElement1 (arr, el) {
    while (arr.includes(el)) {
        let indexEl = arr.indexOf(el);
        arr.splice(indexEl, 1);
    }
}

removeElement1(arr, 7)
console.log(arr)
