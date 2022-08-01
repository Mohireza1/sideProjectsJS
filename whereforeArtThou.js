function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keys = Object.keys(source);
  let newArr = collection.filter((x) => {
    for (let i = 0; i < keys.length; i++) {
      if (!x.hasOwnProperty(keys[i]) || x[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });
  // console.log(newArr)
  arr.push(...newArr);
  // Only change code above this line
  return arr;
}
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);
