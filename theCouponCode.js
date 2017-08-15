function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var convertCurrent = new Date(currentDate);
  var convertExp = new Date(expirationDate);
  if((enteredCode === correctCode) && (convertCurrent <= convertExp)){
    return true;
    }else{
      return false;
      }
}
