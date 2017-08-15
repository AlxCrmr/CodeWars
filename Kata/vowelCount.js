function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for(var i = 0; i < str.length; i++){
    for(var a = 0; a < vowels.length; a++){
      if(vowels[a] == str[i]){
        vowelsCount += 1;
      }
    }
  }
  return vowelsCount;
}
