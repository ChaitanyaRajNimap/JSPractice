const findDupsInArr = (arr) => {
  //   //using nested for loops
  //   let dups = [];
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     for (let j = i + 1; j < arr.length - 1; j++) {
  //       if (arr[i] === arr[j]) {
  //         if (!dups.includes(arr[j])) {
  //           dups.push(arr[j]);
  //         }
  //       }
  //     }
  //   }
  //   return dups;

  //using filter and indexOf
  return arr.filter((currVal, currIdx) => arr.indexOf(currVal) !== currIdx);
};

let arr1 = [6, 9, 15, 6, 13, 9, 11, 15, 11, 6, 26, 87, 6];
console.log(findDupsInArr(arr1));
