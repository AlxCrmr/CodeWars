function doubleChar(str) {
  var charDoubled = '';
  var doubledString = '';
  for (i = 0; i < str.length; i++){
      charDoubled = str.charAt(i).repeat(2);
      doubledString += charDoubled;
  }
  return doubledString;
}
