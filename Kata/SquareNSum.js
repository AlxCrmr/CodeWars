function squareSum(numbers){
    var result = 0;
    for (i in numbers) {
        result += numbers[i] * numbers[i];
    }
    return result;
}
