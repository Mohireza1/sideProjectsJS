// create a new function that takes an array and one or more arguments and removes the arguments from the array.
function destroyer(...arr) {
  const [array1, ...rest] = arr;
  console.log(array1);
  const final = array1.filter((x) => !rest.includes(x));
  console.log(final);
  return final;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
