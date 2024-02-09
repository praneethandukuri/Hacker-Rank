const aVeryBigSum = function (bigNumbers) {
  return bigNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);

}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

