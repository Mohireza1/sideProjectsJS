let randomizer = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    Math.random() < 0.5
      ? (arr[i] = arr[i].toUpperCase())
      : (arr[i] = arr[i].toLowerCase());
  }
  return arr.join("");
};
randomizer("hello There Sitizens");
console.log(randomizer(``));
