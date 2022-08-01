function palindrome(str) {
  let string = str.toLowerCase();
  let mainArr = string.match(/[^_\W]/gi);
  let temp = [...mainArr];
  let reverseArr = temp.reverse();
  for (let i = 0; i < mainArr.length; i++) {
    if (mainArr[i] !== reverseArr[i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("race car"));
