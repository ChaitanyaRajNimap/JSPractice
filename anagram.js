//WAP to find given strings are anagram or not
const isAnagram = (str1, str2) => {
  let tempStr1 = str1.toLowerCase().split("").sort().join("");
  let tempStr2 = str2.toLowerCase().split("").sort().join("");

  if (tempStr1 === tempStr2) {
    return console.log(
      `Given strings ${str1} and ${str2} are anagram of each other`
    );
  } else {
    return console.log(
      `Given strings ${str1} and ${str2} are NOT anagram of each other`
    );
  }
};

console.log(isAnagram("Army", "MarY"));
console.log(isAnagram("cameralistic", "acclimatiser"));
