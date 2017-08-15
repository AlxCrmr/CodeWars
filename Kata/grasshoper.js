function getGrade (s1, s2, s3) {

  var avrgGrade = (s1 + s2 + s3)/ 3;
  if (avrgGrade >= 90){
    return 'A';
    }else if ( avrgGrade >= 80){
      return 'B';
     }else if ( avrgGrade >= 70){
        return 'C';
     }else if ( avrgGrade >= 60){
        return 'D';
     }else{
        return 'F';
        }
}
