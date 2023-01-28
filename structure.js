// Creates a 2D array (map)
export const buildGrid = (rows, columns) => {
  let grid = [];
  // Always fill the array, with different to undefined for test
  grid = new Array(rows).fill(0);
  for (let i = 0; i < grid.length; i++) {
    // Add to each element of the array another array to make a grid
    grid[i] = new Array(columns).fill(0);
  }

  return grid;
};

// Add a cell on specific index, only array 2D
export const addCell = (arr, row, column) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[row][column] = 1;
    }
  }

  // A for (const i of arr) {
  //   for (const j of arr) {
  //     arr[column][row] = 1;
  //   }
  // }
};

// Delete a cell on specific index, only array 2D
export const deleteCell = (arr, row, column) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[row][column] === 1) {
        arr[row][column] = 0;
      }
    }
  }
};

// Check positions around an alive cell (1)
export const checkNeighbours = (arr, row, column) => {
  // Dimensions of the grid
  const rowMax = arr.length;
  const colMax = arr[0].length;
  // Check the neighbours of a 2D array map position
  for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rowMax); i++) {
    for (
      let j = Math.max(0, column - 1);
      j <= Math.min(column + 1, colMax);
      j++
    ) {
      // Do something
      if (i !== row || j !== column) {
        console.log('Vecino ' + i, j);
        arr[i][j] = 2;
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
        console.log('Living cell: ' + arr[i][j], i, j);
        checkNeighbours(arr, i, j);
      }
    }
  }
};

const grid = buildGrid(5, 4);
console.log(grid);
addCell(grid, 2, 1);
checkLivingCell(grid);
console.log(grid);
