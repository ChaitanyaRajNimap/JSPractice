//WAP to find give string is palindrome or not
const isPalindrome = (str) => {
  let temp = str.split("").reverse().join("").toLowerCase();
  str = str.toLowerCase();
  if (temp === str) {
    return console.log(`Given string ${str} is palindrome`);
  } else {
    return console.log(`Given string ${str} is NOT palindrome`);
  }
};

console.log(isPalindrome("Rever"));
console.log(isPalindrome("WoRld"));
