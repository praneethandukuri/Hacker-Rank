const getRatio = function (numerator, denominator) {
  return (numerator / denominator).toFixed(6);
}
function plusMinus(arr) {
  // Write your code here
  const positives = [];
  const negatives = [];
  const zeroes = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      positives.push(arr[index]);
    } else if (arr[index] < 0) {
      negatives.push(arr[index]);
    } else {
      zeroes.push(arr[index]);
    }
  }
  const positivesRatio = getRatio(positives.length, arr.length)
  const negativesRatio = getRatio(negatives.length, arr.length)
  const zeroesRatio = getRatio(zeroes.length, arr.length)
  console.log(positivesRatio)
  console.log(negativesRatio)
  console.log(zeroesRatio)
}
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);