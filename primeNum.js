//WAP to find prime numbers till n term
const findPrimeNums = (n) => {
  let primeArr = [];
  if (n < 2) {
    primeArr.push("Enter valid number");
  } else {
    for (let i = 1; i <= n; i++) {
      if (isPrime(i)) {
        primeArr.push(i);
      }
    }
  }
  return primeArr;
};

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log("findPrimeNums(0) : ", findPrimeNums(0));
console.log("findPrimeNums(1) : ", findPrimeNums(1));
console.log("findPrimeNums(2) : ", findPrimeNums(2));
console.log("findPrimeNums(5) : ", findPrimeNums(5));
console.log("findPrimeNums(10) : ", findPrimeNums(10));
console.log("findPrimeNums(10) : ", findPrimeNums(15));
