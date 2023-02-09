//WAP to find even list
const findEvenList = (list) => {
  let evenNums = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
      evenNums.push(list[i]);
    }
  }
  return evenNums;
};

const list1 = [1, 2, 3, 45, 6, 78, 9];
console.log(findEvenList(list1));
