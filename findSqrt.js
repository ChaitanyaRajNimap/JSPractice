//WAP to find squareroot of given number
const findSqrt = (n) => {
  let x = n;
  let y = 1;
  let e = 0.000001;
  while (x - y > e) {
    x = (x + y) / 2;
    y = n / x;
  }
  return x;
};

console.log(findSqrt(81));
console.log(findSqrt(255));
console.log(findSqrt(4));
