function addTogether(a, b) {
  if (typeof a === "number") {
    if (!b) {
      return (b) => {
        if (typeof b === "number") {
          return a + b;
        } else {
          return undefined;
        }
      };
    } else if (typeof b === "number") {
      return a + b;
    }
  }
}

console.log(addTogether(5)(7));
