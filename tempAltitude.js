// We want the temp altitude of a given array, also there might be errors

// Step 1: Questioning
// What is a temp altitude?
// The difference between the highest and lowest altitude in a given array of temperatures.
// No more questions...

// Step 2: Breaking it into sub-problems
//1- Find min and max
//2- Find the difference between them
//3- Make it return something weird for errors or omit them
//4- Return the difference

// Step 3: Google something if you don't know it

// Step 4: Psudo code
/* function (arr) {
    newArr = arr.filter(numbers)
    alt = newArr.max - newArr.min
    return alt
}

*/
const altitudeFinder = (temps = []) => {
  const numbersOnly = temps.filter((x) => typeof x === "number");
  const altitude = Math.max(...numbersOnly) - Math.min(...numbersOnly);
  return altitude;
};
console.log(altitudeFinder([44, 55, 2, -5, -64, 22, "er", 43, 44, -58]));
