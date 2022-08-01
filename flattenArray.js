function steamrollArray(arr) {
  let newArr = [];
  function flatten(arr) {
    for (let obj of arr) {
      if (Array.isArray(obj)) {
        flatten(obj);
      } else {
        newArr.push(obj);
      }
    }
    return newArr;
  }
  return flatten(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
