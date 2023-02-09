//WAP to find pairs whose sum is 100 from arr = [80,60,10,50,30,100,0,50]
const findPair = (arr) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 100) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
};

const arr1 = [80, 60, 10, 50, 30, 100, 0, 50];
console.log(findPair(arr1));
