//WAP for getting fibonacci sequence with recursion
const fiboWithRec = (n) => {
  if (n < 2) {
    return n;
  }
  return fiboWithRec[i - 1] + fiboWithRec[i - 2];
};

console.log("fiboWithRec(0) : ", fiboWithRec(0));
console.log("fiboWithRec(1) : ", fiboWithRec(1));
console.log("fiboWithRec(2) : ", fiboWithRec(2));
console.log("fiboWithRec(3) : ", fiboWithRec(3));
console.log("fiboWithRec(5) : ", fiboWithRec(5));
