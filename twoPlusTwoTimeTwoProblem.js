function descendingOrder(n){
  var digits = n.toString().split('');

  digits = digits.sort(function(a,b){
  return a<b;});

  digits = digits.join('');

  return Number(digits);
}
