function miniMaxSum(arr) {
  let sum = 0;
  let mini = arr[0];
  let max = arr[0];

  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    sum += value;

    if (value < mini) {
      mini = value;
    }

    if (value > max) {
      max = value;
    }
  }

  const miniSum = sum - (max);
  const maxSum = sum - (mini);

  return [miniSum, maxSum];
}

console.log(miniMaxSum([7, 69, 2, 221, 8974])) // [20, 28];