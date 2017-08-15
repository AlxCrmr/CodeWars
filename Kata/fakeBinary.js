function fakeBin(x){
 var binNum = '';
 for ( i = 0; i < x.length; i++){
   if ( x.charAt(i) < 5){
     binNum += '0';
   }else
     binNum += '1';
   }
  return binNum;
}
