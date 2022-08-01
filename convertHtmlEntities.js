function convertHTML(str) {
  let sepe = str.split("");
  console.log(sepe);
  for (let i = 0; i < sepe.length; i++) {
    switch (sepe[i]) {
      case "<":
        sepe[i] = "&lt;";
        break;
      case "&":
        sepe[i] = "&amp;";
        break;
      case ">":
        sepe[i] = "&gt;";
        break;
      case '"':
        sepe[i] = "&quot;";
        break;
      case "'":
        sepe[i] = "&apos;";
        break;
    }
  }
  let finalStr = sepe.join("");
  console.log(finalStr);
  return finalStr;
}

convertHTML("Dolce & Gabbana");
