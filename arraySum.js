function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let currentIndex = 0; currentIndex < ar.length; currentIndex++) {
    sum += ar[currentIndex];
  }
  return sum;
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));