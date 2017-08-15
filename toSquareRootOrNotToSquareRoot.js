function squareOrSquareRoot(array) {
  var output= [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 0 && Math.sqrt(array[i]) % 1 === 0){
      output.push(Math.sqrt(array[i]));
    }else{
     output.push(Math.pow(array[i] , 2));
    }
  }
  return output;
}
