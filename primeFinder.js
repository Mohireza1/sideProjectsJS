// let primeFinder = (num) => {
//   let numbers = [];
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (!numbers.includes(i)) {
//       primes.push(i);
//     }
//     for (let j = i; j <= num; j += i) {
//       numbers.push(j);
//     }
//   }
//   //   console.log(numbers);
//   return primes;
// };
// console.log(primeFinder(110000));
// let primeFinder = (num) => {
//   let numbers = [];
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (!numbers[i]) {
//       primes.push(i);
//     }
//     for (let j = i * 2; j <= num; j += i) {
//       numbers[j] = true;
//     }
//   }
//   //   console.log(numbers);
//   return primes;
// };
// console.log(primeFinder(110000));
(() => {
  let arr = [];
  for (let i = 97; i < 10097; i++) {
    const letter = "hello" + String.fromCharCode(i);
    // arr[letter] = true;
    arr.push(letter);
  }
  console.log(arr);
  return arr;
})();
