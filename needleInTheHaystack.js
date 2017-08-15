function findNeedle(haystack) {
  var place = 0;
  for (i in haystack){
    if (haystack[i] === "needle"){
      return "found the needle at position " + place;
    } else {
      place++;
      }
   }
}
