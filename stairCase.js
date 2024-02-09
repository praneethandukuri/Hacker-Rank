const getStaircase = function (rows) {
  const stairCaseShape = [];
  let row = "";
  let spaces = "";
  let hashes = "";
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    spaces = " ".repeat(rows - currentRow);
    hashes = "#".repeat(currentRow);
    row = spaces + hashes;
    stairCaseShape.push(row);
  }
  return stairCaseShape.join("\n");
}
console.log(getStaircase(6));