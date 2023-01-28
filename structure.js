// Creates a 2D array (map)
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

// Add a cell on specific index, only array 2D
export const addCell = (arr, column, row) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[column][row] = 1;
    }
  }

  // A for (const i of arr) {
  //   for (const j of arr) {
  //     arr[column][row] = 1;
  //   }
  // }
};

// Delete a cell on specific index, only array 2D
export const deleteCell = (arr, column, row) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[column][row] === 1) {
        arr[column][row] = 0;
      }
    }
  }
};

// Checks the positions of the 2D grid, if they are alive (1)
export const checkLivingCell = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        // Gives the position that is alive in the 2D grid
        console.log(arr[i][j], i, j);
      }
    }
  }
};

// Check positions around an alive cell (1)
export const checkNeighbours = (arr, column, row) => {
  const colMax = arr.length;
  const rowMax = arr[0].length;

  for (
    let i = Math.max(0, column - 1);
    i <= Math.min(column + 1, colMax);
    i++
  ) {
    for (let j = Math.max(0, row - 1); j <= Math.min(row + 1, rowMax); j++) {
      if (i !== column || j !== row) {
        return arr[i][j];
      }
    }
  }
};

const grid = buildGrid(3, 3);
console.log(grid);
addCell(grid, 1, 1);
addCell(grid, 0, 2);
console.log(grid);
checkLivingCell(grid);
