function simpleArraySum(ar) {
  // Write your code here
  let arraySum = 0;
  for (let index = 0; index < ar.length; index++) {
    arraySum += ar[index];
  }
  return arraySum;
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));