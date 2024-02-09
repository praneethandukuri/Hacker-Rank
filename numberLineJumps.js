const kangaroo = function (x1, v1, x2, v2) {
  if (x1 === x2 && v1 === v2) {
    return 'YES';
  }

  if ((x2 > x1 && v2 >= v1) || (x1 > x2 && v1 >= v2)) {
    return 'NO';
  }

  while (x1 !== x2) {
    x1 += v1;
    x2 += v2;

    if (x1 > x2) {
      return 'NO';
    }
  }

  return 'YES';
};

console.log(kangaroo(0, 3, 4, 2)); // Output: YES
console.log(kangaroo(0, 2, 5, 3)); // Output: NO
console.log(kangaroo(1, 2, 5, 3)); // Output: NO
console.log(kangaroo(0, 3, 3, 3)); // Output: NO
console.log(kangaroo(0, 5, 4, 3)); // Output: YES
console.log(kangaroo(0, 2, 0, 2)); // Output: YES
console.log(kangaroo(10, 3, 5, 2)); // Output: NO
console.log(kangaroo(1, 3, 5, 2)); // Output: YES
console.log(kangaroo(2, 2, 2, 2)); // Output: YES
