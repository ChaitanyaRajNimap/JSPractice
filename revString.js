//WAP to reverse an integer without using any inbuilt methods
const revStr = (str) => {
  //with built in fun
  //return str.split("").reverse().join("");

  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
};

console.log(revStr("Naruto"));
console.log(revStr("Sasuke"));
