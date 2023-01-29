const buildGrid = (rows, columns) => {
  let grid = [];
  // Always fill the array, with different to undefined for test
  grid = new Array(rows).fill(0);
  for (let i = 0; i < grid.length; i++) {
    // Add to each element of the array another array to make a grid
    grid[i] = Array.from({ length: columns }, () => 0);
  }

  return grid;
};

const checkNeighbours = (arr, row, column) => {
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

const checkCells = (arr) => {
  let nextArrayMap = arr.map((row) => [...row]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const livingCells = checkNeighbours(arr, i, j);

      nextArrayMap = cellsConditions(livingCells, nextArrayMap, i, j);
    }
  }

  return nextArrayMap;
};

const cellsConditions = (numLivingCells, arr, row, column) => {
  if (arr[row][column] === 1) {
    if (numLivingCells < 2 || numLivingCells > 3) {
      arr[row][column] = 0;
    }
  } else if (numLivingCells === 3) {
    arr[row][column] = 1;
  }

  return arr;
};

function loop(array) {
  array = checkCells(array);
  return array;
}

const playGame = (array, maxRounds) => {
  let count = 0;
  const intervalRounds = setInterval(() => {
    array = loop(array);
    console.log(array);
    updateGrid(array);
    count++;
    if (count >= maxRounds) {
      clearInterval(intervalRounds);
    }
  }, 400);
};

function createGrid(grid) {
  const table = document.querySelector('.grid');

  for (let i = 0; i < grid.length; i++) {
    const row = table.insertRow(-1);
    for (let j = 0; j < grid[i].length; j++) {
      const cell = row.insertCell(-1);
      if (grid[i][j] === 0) {
        cell.style.backgroundColor = 'grey';
      } else {
        cell.style.backgroundColor = 'orange';
      }

      cell.addEventListener('click', () => {
        updateCell(grid);
      });
    }
  }
}

function updateCell(grid) {
  const cell = event.currentTarget;
  const i = cell.parentNode.rowIndex;
  const j = cell.cellIndex;
  if (grid[i][j] === 0) {
    grid[i][j] = 1;
    cell.style.backgroundColor = 'orange';
  } else {
    grid[i][j] = 0;
    cell.style.backgroundColor = 'grey';
  }

  console.log(`Position: ${i} ${j}`);
  console.log(grid);
}

function updateGrid(grid) {
  const table = document.querySelector('.grid');
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = table.rows[i].cells[j];
      console.log(grid);
      if (grid[i][j] === 0) {
        cell.style.backgroundColor = 'grey';
      } else {
        cell.style.backgroundColor = 'orange';
      }
    }
  }
}

const grid = buildGrid(10, 10);
createGrid(grid);
document.querySelector('.game').onclick = function () {
  playGame(grid, 100);
};
