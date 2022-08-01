function telephoneCheck(str) {
  let regex =
    /^(1)?((\s?\(\s?\w{3}\s?\))|([-\s]?\w{3}))([-\s]?\w{3})([-\s]?\w{4})$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");
