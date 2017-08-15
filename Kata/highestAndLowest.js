function highAndLow(numbers){
  var nums = numbers.split(' ');
  return Math.max.apply(null, nums) + ' ' + Math.min.apply(null, nums);
}
