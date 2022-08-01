function persianRot13(str) {
  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };
  let string = str;
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) <= 1610 && string.charCodeAt(i) >= 1591) {
      string = string.replaceAt(i, String.fromCharCode(str.charCodeAt(i) - 20));
    } else if (string.charCodeAt(i) <= 1590 && string.charCodeAt(i) >= 1570) {
      string = string.replaceAt(i, String.fromCharCode(str.charCodeAt(i) + 20));
    }
  }
  console.log(string);
  return string;
}
console.log("ی".charCodeAt(0));
persianRot13("ا ب پ ت ث ج چ ح خ د ذ ر ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ه ی");
ا
آ
ب
پ
ت
ث
ج
چ
ح
خ
د
ذ
ر
ز
ژ
س
ش
ص
ض
ط
ظ
ع
ء
ئ
أ
إ
ؤ
غ
ف
ق
ک
گ
ل
م
ن
و
ه
ی