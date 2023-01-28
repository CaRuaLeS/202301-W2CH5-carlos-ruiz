export const buildGrid = (columns, rows) => {
  let grid = [];
  // Always fill the array, with different to undefined for test
  grid = new Array(columns).fill(0);
  for (let i = 0; i < grid.length; i++) {
    // Add to each element of the array another array to make a grid
    grid[i] = new Array(rows).fill(0);
  }

  return grid;
};

export const addCell = (arr, column, row) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[column][row] = 1;
    }
  }
};

const grid = buildGrid(3, 3);
console.log(grid);
addCell(grid, 1, 1);
console.log(grid);
