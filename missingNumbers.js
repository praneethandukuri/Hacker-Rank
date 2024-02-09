const getCounter = function (array) {
  const counter = {};
  for (let index = 0; index < array.length; index++) {
    if (counter[array[index]]) {
      counter[array[index]]++;
    } else {
      counter[array[index]] = 1;
    }
  }
  return counter;
}

const getUniqueMissingNumbers = function (arr, brr) {
  const uniqueMissingNumbers = [];
  const arrCounter = getCounter(arr);
  const brrCounter = getCounter(brr);

  for (const key in brrCounter) {
    if (!arrCounter[key] || brrCounter[key] > arrCounter[key]) {
      uniqueMissingNumbers.push(+key);
    }
  }
  return uniqueMissingNumbers;
}

const missingNumbers = function (arr, brr) {
  const uniqueMissingNumbers = getUniqueMissingNumbers(arr, brr);
  const ascendingOrder = uniqueMissingNumbers.sort((a, b) => a - b);
  return ascendingOrder;
}

console.log(missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]))
console.log(missingNumbers([203, 204, 205, 206, 207, 208, 203, 204, 205, 206], [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]))