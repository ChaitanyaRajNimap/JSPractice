//WAP to find fibonacci series upto 'n' number
const findFibo = (n) => {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log("findFibo(0) : ", findFibo(0));
console.log("findFibo(1) : ", findFibo(1));
console.log("findFibo(2) : ", findFibo(2));
console.log("findFibo(3) : ", findFibo(3));
console.log("findFibo(5) : ", findFibo(5));
console.log("findFibo(10) : ", findFibo(10));
