let persianRot13 = (str) => {
  let replacer = (str, index, value) => {
    return str.substring(0, index) + value + str.substring(index + 1);
  };
  let persians = {
    آ: "س",
    ا: "س",
    ب: "ش",
    پ: "ص",
    ت: "ض",
    ث: "ط",
    ج: "ظ",
    چ: "ع",
    ح: "غ",
    خ: "ف",
    د: "ق",
    ذ: "ک",
    ر: "ل",
    ز: "م",
    ژ: "ن",
    س: "ا",
    ش: "ه",
    ص: "ی",
    ض: "ا",
    ط: "ب",
    ط: "پ",
    ظ: "ت",
    ع: "ث",
    ء: "ث",
    ئ: "ث",
    أ: "ث",
    إ: "ث",
    ؤ: "ث",
    غ: "ج",
    ف: "چ",
    ق: "ه",
    ک: "خ",
    گ: "د",
    ل: "ذ",
    م: "ر",
    ن: "ز",
    و: "ژ",
    ه: "س",
    ی: "ش",
  };
  let string = str;
  for (let i = 0; i < string.length; i++) {
    if (/[\u0600-\u06FF]/gi.test(string[i]) === true)
      string = replacer(string, i, persians[string[i]]);
  }
  console.log(string);
};
persianRot13("ژ");
