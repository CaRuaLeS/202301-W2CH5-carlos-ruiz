export const buildGrid = (columns, rows) => {
  let grid = [];
  grid = new Array(columns);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows).fill(0);
  }

  return grid;
};

// Console.log(buildGrid(1, 4));
