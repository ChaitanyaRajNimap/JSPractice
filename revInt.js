//WAP to reverse an integer without using any inbuilt methods and converting it to string
const revInt = (n) => {
  let result = 0;
  while (n > 0) {
    let temp = n % 10;
    result = result * 10 + temp;
    n = Math.floor(n / 10);
  }
  return result;
};

console.log("revInt(16439) : ", revInt(16439));
