const numbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// TASK 1

let positivesNum = numbers.filter((num) => {
    return num >= 0;
});

let sumPositivesNum = positivesNum.reduce((initNum, currentNum) => initNum + currentNum, 0)

console.log('Task 1', sumPositivesNum);
console.log('Task 1', positivesNum.length);

// TASK 2

let minNum = Math.min(...numbers);
let ordinalMinNum = numbers.indexOf(minNum) + 1;

console.log('Task 2', minNum);
console.log('Task 2', ordinalMinNum);


// TASK 3

let maxNum = Math.max(...numbers);
let ordinalMaxNum = numbers.indexOf(maxNum) + 1;

console.log('Task 3', maxNum);
console.log('Task 3', ordinalMaxNum);

// TASK 4

let negativesNum = numbers.filter((num) => {
    return num <= 0;
});

console.log('Task 4', negativesNum.length);

// TASK 6

let arrSortNum = positivesNum.sort((a, b) => a - b);

let repeatingNum = arrSortNum.filter((el, index, arr) => {
    return index !== arr.indexOf(el);
})
console.log('Task 6', repeatingNum.length);

// ---- v2
let newArr1 = [];
arrSortNum.forEach((num, index) => {
    if (num === arrSortNum[index + 1]) {
        newArr1.push(num)
    }
})
console.log('Task 6 (v2)', newArr1.length);

// TASK 5

let notRepeatingNum = arrSortNum.filter(num => !repeatingNum.includes(num));
console.log('Task 5', notRepeatingNum.length);

// ---- v2
let objRepeatingNum = arrSortNum.reduce((initObj, num) => {
    initObj[num] ? initObj[num]++ : initObj[num] = 1;
    return initObj;
}, {});

let filterRepNum = Object.keys(objRepeatingNum).filter((num) => {
    return objRepeatingNum[num] === 1;
})

let notRepeatingNum1 = filterRepNum.map(el => +el); // Робимо із строки число
console.log('Task 5 (v2)', notRepeatingNum1.length);

// TASK 7

let sumRepeatingNum = repeatingNum.reduce((sum, num) => {
    sum += num;
    return sum;
}, 0);

console.log('Task 7', sumRepeatingNum);

//TASK 8

let sumNotRepeatingNum = notRepeatingNum.reduce((sum, num) => {
    sum += num;
    return sum;
}, 0);

console.log('Task 8', sumNotRepeatingNum);


// TASK 9

let multPositiveNum = positivesNum.reduce((mult, num) => {
    mult = mult * num;
    return mult;
}, 1);


console.log('Task 9',multPositiveNum);


// TASK 10

let maxNumIsArr = numbers.map((num) => {
    if (num === maxNum) {
        return maxNum
    } else return 0;
})

console.log('Task 10', maxNumIsArr);


