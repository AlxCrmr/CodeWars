function DNAStrand(dna){
  var letters = dna.split('');
  var result = [];

  for(var i = 0; i< letters.length; i++){
    if(letters[i] === "A"){
      result.push("T");
    }else if(letters[i] === "T"){
      result.push("A");
    }else if(letters[i] === "C"){
      result.push("G");
    }else if(letters[i] === "G"){
      result.push("C");
    }//ELSE
  }//FOR

  return result.join('');
}
