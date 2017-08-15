function squareDigits(num){
  var x = [];
  var digits = (""+num).split("");
  for(var i = 0; i < digits.length; i++){
    x.push(Math.pow(digits[i], 2));
  }
  return Number(x.join(''));
}
