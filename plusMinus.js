const getRatio = function (numerator, denominator) {
  return (numerator / denominator).toFixed(6);
}
const plusMinus = function (integers) {
  const signValues = {
    positives: [],
    negatives: [],
    zeroes: []

  }
  for (let index = 0; index < integers.length; index++) {
    if (integers[index] > 0) {
      signValues.positives.push(integers[index]);
    } else if (integers[index] < 0) {
      signValues.negatives.push(integers[index]);
    } else {
      signValues.zeroes.push(integers[index]);
    }
  }
  const positivesRatio = getRatio(signValues.positives.length, integers.length)
  const negativesRatio = getRatio(signValues.negatives.length, integers.length)
  const zeroesRatio = getRatio(signValues.zeroes.length, integers.length)
  console.log(positivesRatio)
  console.log(negativesRatio)
  console.log(zeroesRatio)
}
const integersValues = [-4, 3, -9, 0, 4, 1];
plusMinus(integersValues);