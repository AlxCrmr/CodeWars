function solution(number){
  var answer = 0;

  for(var i = 0; i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      answer += i
    }//if
  }//for
  return answer;
}//func







function solution(number){

  var arr =[];

    for(var i = 0; i< number; i++){
      if(i % 3 === 0){
        arr.push(i);
      } //if
      if(i % 5 === 0){
        arr.push(i);
      } //if
    }//for
    var unique = arr.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });

    return unique.reduce(function(a,b){
        return a+b;
    }, 0);

}
