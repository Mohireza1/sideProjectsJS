// function pairElement(str) {
//   let arr = str.split("");
//   let pairs = arr.reduce((pairArr, pair) => {
//     if (pair === "G") {
//       pairArr.push(["G", "C"]);
//     }
//     if (pair === "C") {
//       pairArr.push(["C", "G"]);
//     }
//     if (pair === "A") {
//       pairArr.push(["A", "T"]);
//     }
//     if (pair === "T") {
//       pairArr.push(["T", "A"]);
//     }
//     return pairArr;
//   }, []);
//   return pairs;
// }
const dna = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};
function pairElement(str) {
  let keys = str.split("");
  let matches = keys.map((key) => [key, dna[key]]);
  return matches;
}

console.log(pairElement("ATATCGGTACGGGTTAGGCACGA"));
