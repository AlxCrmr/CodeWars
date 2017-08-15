function countSheeps(arrayOfSheep) {
  var count = 0;
  for (i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] === true){
      count += 1;
    }
  }
    return count;
}
