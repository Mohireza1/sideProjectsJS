'use strict';

function openParanthesesFinder(str) {
  // Set the open and closed parantheses object arrays
  const opens = [];
  const closes = [];

  // Map for counting and complimenting
  const openFinder = new Map([
    ['(', 0],
    ['{', 0],
    ['[', 0],
  ]);
  const openComp = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const strArr = str.split('');
  const strFinal = [...strArr];

  // Adds every open parantheses to the array
  strArr.forEach((x, i) => {
    if (x === '{' || x === '[' || x === '(') {
      openFinder.set(x, openFinder.get(x) + 1);
      opens.push({
        type: x,
        complimentary: openComp.get(x),
        index: i,
        placeInType: openFinder.get(x),
      });
    }
  });

  //   Same map for closes
  const closeFinder = new Map([
    [')', 0],
    ['}', 0],
    [']', 0],
  ]);
  const closeComp = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  //   Find close parantheses
  strArr.forEach((x, i) => {
    if (x === '}' || x === ']' || x === ')') {
      closeFinder.set(x, closeFinder.get(x) + 1);
      closes.push({
        type: x,
        complimentary: closeComp.get(x),
        index: i,
        placeInType: closeFinder.get(x),
      });
    }
  });

  let final = false;

  if (opens.length === 0 && closes.length === 0) {
    return str;
  } else if (opens.length === 0) {
    strFinal[closes[0].index] = `***${strFinal[closes[0].index]}***`;
    return strFinal.join('');
  } else if (closes.length === 0) {
    strFinal[opens[0].index] = `***${strFinal[opens[0].index]}***`;
    return strFinal.join('');
  }

  opens.forEach(open => {
    let tempIndex = -1;
    if (!final) {
      for (const close of closes) {
        if (
          close.complimentary === open.type &&
          close.placeInType === open.placeInType
        ) {
          final = false;
          tempIndex = -1;
          break;
        } else {
          final = true;
          tempIndex = open.index;
        }
      }
    }
    if (tempIndex !== -1) {
      strFinal[tempIndex] = `***${strFinal[tempIndex]}***`;
    }
  });

  if (final) {
    return strFinal.join('');
  }

  closes.forEach(close => {
    let tempIndex = -1;

    if (!final) {
      for (const open of opens) {
        if (
          open.complimentary === close.type &&
          open.placeInType === close.placeInType
        ) {
          final = false;
          tempIndex = -1;
          break;
        } else {
          final = true;
          tempIndex = close.index;
        }
      }
      if (tempIndex !== -1) {
        strFinal[tempIndex] = `***${strFinal[tempIndex]}***`;
      }
    }
  });

  if (final) {
    return strFinal.join('');
  } else {
    return str;
  }
}

console.log(
  openParanthesesFinder(
    `Esse quis nostru[d sunt in velit. Nulla ((cillum nulla dolor sit. Consequat sint adipisicing consectetur pariatur dolor fugiat consequat. Nostrud magna anim ))ea tempor non duis.`
  )
);
