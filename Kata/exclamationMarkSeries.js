function remove(s){
  var lastChar = s.charAt(s.length-1);
   if (lastChar == '!'){
      s = s.slice('!', -1);
      return s;
   }else{
      return s;
    }
}
