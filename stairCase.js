const getStaircase = function (n) {
  const stairCase = [];
  let row = "";
  let spaces = "";
  let hashes = "";
  for (let currentRow = 1; currentRow <= n; currentRow++) {
    spaces = " ".repeat(n - currentRow);
    hashes = "#".repeat(currentRow);
    row = spaces + hashes;
    stairCase.push(row);
  }
  return stairCase.join("\n");
}
console.log(getStaircase(6));
