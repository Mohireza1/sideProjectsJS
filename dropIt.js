function dropElements(arr, func) {
  let newArr = [...arr];
  for (let n = 0; n < newArr.length; ) {
    if (func(newArr[n])) {
      console.log(newArr);
      return newArr;
    } else {
      newArr.shift();
    }
  }
  return newArr;
}

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});
