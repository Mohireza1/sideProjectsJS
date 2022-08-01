// This works but it takes forever to run so you have to come back later and try again.

// function smallestCommons(arr) {
//   let [min, max] = arr.sort((a, b) => a - b);
//   let multiples = [];
//   let maxMult = 1;
//   for (let i = min; i <= max; i++) {
//     maxMult *= i;
//   }
//   for (let i = min; i <= max; i++) {
//     let container = [];
//     for (let j = i; j <= maxMult; j += i) {
//       container.push(j);
//     }

//     multiples.push(container);
//   }
//   let final = multiples.reduce((p, c) => p.filter((e) => c.includes(e)))[0];
//   console.log(final);
//   return final;
// }
// smallestCommons([23, 18]);
