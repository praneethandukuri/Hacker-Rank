const array = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

const getSumLeftToRight = function (array) {
  let sumLeftTORight = 0;
  for (let index = 0; index < array.length; index++) {
    sumLeftTORight += array[index][index];
  }
  return sumLeftTORight;
}
const absolutePrimary = getSumLeftToRight(array);

const getSumRightToLeft = function (array) {
  let sumRightToLeft = 0;
  for (let index = 0; index < array.length; index++) {
    sumRightToLeft += array[index][(array.length - 1) - index];
  }
  return sumRightToLeft;
}
const absoluteSecondary = getSumRightToLeft(array);
const result = Math.abs(absolutePrimary - absoluteSecondary);
console.log(result);