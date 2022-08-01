function rot13(str) {
  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };
  let string = str;
  for (let i = 0; i < string.length; i++) {
    if (
      (string.charCodeAt(i) < 91 && string.charCodeAt(i) > 77) ||
      (string.charCodeAt(i) < 123 && string.charCodeAt(i) > 109)
    ) {
      string = string.replaceAt(i, String.fromCharCode(str.charCodeAt(i) - 13));
    } else if (
      (string.charCodeAt(i) < 78 && string.charCodeAt(i) > 64) ||
      (string.charCodeAt(i) < 110 && string.charCodeAt(i) > 97)
    ) {
      string = string.replaceAt(i, String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  console.log(string);
  return string;
}

rot13("Shalam");
