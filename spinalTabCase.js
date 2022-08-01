function spinalCase(str) {
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  let newArr = newStr.split(/[\s_\-]/g);
  let finalStr = newArr.join("-");
  console.log(finalStr);
  return finalStr;
}

spinalCase("thisIsSpinalTap");
