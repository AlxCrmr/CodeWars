function getMiddle(word){
  var length;
  var position;

  if(word.length  % 2 == 0) {
      length = 2;
      position = (word.length / 2) - 1;

    } else {
       length = 1;
       position = word.length / 2;
    }

  return word.substring(position, position + length);
}
