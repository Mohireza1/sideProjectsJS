// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
  let newStr = str;
  let regex = /^[^aioue]+/g;
  if (!regex.test(str)) {
    newStr += 'way';
  } else if (!str.match(/[aioue]/g)) {
    newStr += 'ay';
  } else {
    newStr = str.replace(/(^[^aioue]+)(\w+)/g, '$2$1') + 'ay';
  }
  console.log(newStr);
  return newStr;
}

translatePigLatin('consonant');
