const simpleArraySum = function (numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));