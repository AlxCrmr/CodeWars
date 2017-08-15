function spinWords(str){
  //TODO Have fun :)
  var strArr = str.split(" ");
  var arr = [];
   for(var i =0; i< strArr.length; i++){
     if(strArr[i].length >= 5){
      arr.push(strArr[i].split("").reverse().join(""));
      }else{
        arr.push(strArr[i]);
      }
   }//for
    return arr.join(" ");
}//func
