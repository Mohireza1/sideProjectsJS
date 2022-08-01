function uniteUnique(...arr) {
  let joined = arr.flat();
  let final = [];
  for (let i = 0; i < joined.length; i++) {
    if (joined.indexOf(joined[i]) === i) {
      final.push(joined[i]);
    }
  }
  console.log(final);
  return final;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// function uniteUnique(...arr) {
// new Set is inside a spreaded array because otherwise it would return "Set(5) {1,3,2,5,4}"
//   return [...new Set(arr.flat())];
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
