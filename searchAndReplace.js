function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.slice(1);
    console.log(after);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  console.log(before);
  const final = str.replace(before, after);
  //   console.log(final)
  return final;
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
