/* Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.

JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.

American Express :- Starting with 34 or 37, length 15 digits.

Visa :- Starting with 4, length 13 or 16 digits.

MasterCard :- Starting with 51 through 55, length 16 digits.

Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits*/

const myStr = "5345687985645321";
const myRegex =
  /(3(0[0-5]|36|38)\d{11}$)|((^(2131|1800)\d{11})|(^35\d{14}))|(^(34|37)\d{13})|(^4(\d{12}|\d{15}))|(^(5[1-5])\d{14})|(^6011\d{12}|^5\d{14})/;
let result = myRegex.test(myStr);
/*
Uppercase (A-Z) and lowercase (a-z) English letters.

Digits (0-9).

Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~

Character .( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
*/
const emailRegex =
  /^(\w+(?:[-\.]\w+)*)@((?:\w+(?:[\.-]\w+)*)+(?:\.[a-z]{2,3}))$/i;
const email = "mohireza50@gmail.com";
let result2 = emailRegex.test(email);

// Write a JavaScript program to search a date within a string
let myDateFunc = (date) => {
  let myDate = date;
  let myDateRegex =
    /(([0-3][0-9]\/)([01][0-9]\/)([1-2]\d{3}))|(([01][0-9]\/)([0-3][0-9]\/)([1-2]\d{3}))|(?<=\s)([1-2]\d{3})(?=\s)/g; //In the last one, I used look behind and look ahead because without them the free space characters would be included in the output.
  return myDate.match(myDateRegex);
};
let result3 = myDateFunc(
  "I was born in 26/07/2002 (or 07/26/2002 as they say in some countries) but 20001 was the year of the odyssey"
);

// TRIM FUNCTION
const trimRegex = /(?<=^\s)(.)+(?=\s$)/gi;
const trimStr =
  " helkjelkj fjlskjfsd lk;jsdlk;f jsdk;lf jsdl;kf jsd;lf jkl;ksfj ;dlskf jsl;dkf j ";
let result4 = trimStr.match(trimRegex);
console.log(result4);

console.log(
  `result is ${result}\nresult2 is ${result2}\nresult3 is ${result3}`
);

function trying(str) {
  return str.replace(/([A-Z])/g, (match) => match.toLowerCase());
}
console.log(trying("heLlO"));
