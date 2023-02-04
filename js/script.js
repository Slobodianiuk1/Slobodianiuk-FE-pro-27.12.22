function pow (num, degree) {
  return degree === 0 ? 1 : num * pow(num, --degree);
}

console.log(pow(2, 4));
