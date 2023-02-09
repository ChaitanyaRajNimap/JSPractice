//WAP to swap values without using any variable

const swapValues = (a, b) => {
  //using 3rd var
  //   let temp = a;
  //   a = b;
  //   b = temp;

  a = a + b;
  b = a - b;
  a = a - b;

  console.log("After swap: ", a, b);
};

let x = 10,
  y = 12;
console.log("Before swap: ", x, y);
swapValues(x, y);
