function positiveSum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}


function positiveSum(arr) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      delete arr[i];
    }
  }
  var singleVal = 0;
  singleVal = arr.reduce(function(prevVal, curVal){
  return prevVal + curVal;
}, 0);
  return singleVal;
}
