function getSum () {
  let result = 0;
  return function(num) {
    return result += num;
  };
}

let sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
