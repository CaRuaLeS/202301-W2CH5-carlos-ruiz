function buildGrid(columns, rows) {
  const gridArray = new Array(columns)
    .fill(null)
    .map(() => new Array(rows).fill(0));

  return gridArray;
}

console.log(buildGrid(3, 4));
