// Creates a 2D array (map)
export const buildGrid = (rows, columns) => {
  let grid = [];
  // Always fill the array, with different to undefined for test
  grid = new Array(rows).fill(0);
  for (let i = 0; i < grid.length; i++) {
    // Add to each element of the array another array to make a grid
    grid[i] = Array.from({ length: columns }, () => 0);
  }

  return grid;
};

// Add a cell on specific index, only array 2D
export const addCell = (arr, row, column) => {
  arr[row][column] = 1;
};

// Delete a cell on specific index, only array 2D
export const deleteCell = (arr, row, column) => {
  arr[row][column] = 0;
};

// Check positions around an alive cell (1)
export const checkNeighbours = (arr, row, column) => {
  let livingCells = 0;
  // Dimensions of the grid
  const rowMax = arr.length - 1;
  const colMax = arr[0].length - 1;
  // Check the neighbours of a 2D array map position
  for (let i = Math.max(0, row - 1); i <= Math.min(row + 1, rowMax); i++) {
    for (
      let j = Math.max(0, column - 1);
      j <= Math.min(column + 1, colMax);
      j++
    ) {
      // Do something
      if (i !== row || j !== column) {
        if (arr[i][j] === 1) {
          livingCells++;
        }
      }
    }
  }

  return livingCells;
};

// Checks the positions of the 2D grid
export const checkCells = (arr) => {
  let nextArrayMap = arr.map((row) => [...row]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const livingCells = checkNeighbours(arr, i, j);

      nextArrayMap = cellsConditions(livingCells, nextArrayMap, i, j);
    }
  }

  return nextArrayMap;
};

export const cellsConditions = (numLivingCells, arr, row, column) => {
  // Const newArray = [...arr];

  if (arr[row][column] === 1) {
    if (numLivingCells < 2 || numLivingCells > 3) {
      arr[row][column] = 0;
    }
  } else if (numLivingCells === 3) {
    arr[row][column] = 1;
  }

  return arr;
};

export const playGame = (array, maxRounds) => {
  let i = 0;
  const init = setInterval(() => {
    array = checkCells(array);
    i++;
    console.log(array);
    if (i >= maxRounds) {
      clearInterval(init);
    }
  }, 700);
  return array;
};

const grid = buildGrid(6, 6);
addCell(grid, 2, 1);
addCell(grid, 2, 2);
addCell(grid, 2, 3);
addCell(grid, 5, 4);
addCell(grid, 4, 1);
addCell(grid, 4, 0);
console.log(grid);

playGame(grid, 1);
