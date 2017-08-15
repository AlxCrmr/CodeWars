function pigIt(str){
  //Code here
  var result = [];
  var arr = str.split(' ');
  for(var i = 0; i < arr.length; i++){
     result.push(arr[i].substr(1) + arr[i].substr(0, 1) + "ay");
  }//for
  return result.join(" ");
}//func
