function GetAwesome(num) {
  const str = num.toString();
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return str === reversedStr;
}
