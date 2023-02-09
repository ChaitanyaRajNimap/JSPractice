//WAP to find second largest of arr = [12,35,1,10,34,1,35] without sorting, deleteing duplicates and any built in functions

const secLargest = (arr) => {
  let max = 0,
    max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max2) {
      if (arr[i] > max) {
        max2 = max;
        max = arr[i];
      } else {
        max2 = arr[i];
      }
    }
  }
  console.log("Max and max2 are : ", max, max2);
};

const arr1 = [12, 35, 1, 10, 34, 1, 35];
secLargest(arr1);
