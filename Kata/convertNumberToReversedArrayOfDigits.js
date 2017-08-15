function digitize(n) {
  return String(n).split('').reverse().map(Number);
}



function digitize(n) {
  var array = [];
  while (n) {
    array.push(n % 10);
    n = Math.floor(n/10);
  }
return array;
}
