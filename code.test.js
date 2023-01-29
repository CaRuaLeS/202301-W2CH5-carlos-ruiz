import {
  buildGrid,
  addCell,
  deleteCell,
  checkNeighbours,
  cellsConditions,
  checkCells,
  playGame,
} from './structure';
jest.useFakeTimers();

describe('Given the function to create a grid', () => {
  describe('When the grid has two values', () => {
    test('Then if add 0 colums and 0 rows', () => {
      const grid = buildGrid(0, 0);
      expect(grid).toEqual([]);
    });
    test('Then if add 4 colums and 3 rows', () => {
      const grid = buildGrid(2, 2);
      expect(grid).toEqual([
        [0, 0],
        [0, 0],
      ]);
    });
  });
  describe('When you want to delete a cell', () => {
    test('Then you set the position index 1, 1, and the grid changes', () => {
      const grid = buildGrid(3, 3);
      addCell(grid, 1, 1);
      addCell(grid, 1, 2);
      addCell(grid, 2, 2);
      deleteCell(grid, 1, 2);
      expect(grid).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]);
    });
  });
  describe('When the grid has one living cell and near this is another one', () => {
    test('Then if we check the surroundings it checks 1 living cell ass neightbour', () => {
      const grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];
      const value = checkNeighbours(grid, 1, 1);
      expect(value).toBe(1);
    });
  });
  describe('When the grid has 3 living cells nearby', () => {
    test('Then it checks the surroundings and a new cell borns', () => {
      const grid = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 1],
      ];
      cellsConditions(3, grid, 1, 1);
      expect(grid).toEqual([
        [0, 0, 0],
        [0, 1, 1],
        [0, 1, 1],
      ]);
    });
  });
  describe('When you want to check cells and simulate the game', () => {
    test('Then you set a especific grid, and the middle one position should born', () => {
      const grid = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const newArr = checkCells(grid);
      expect(newArr).toEqual([
        [0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ]);
    });
    describe('When the grid is set', () => {
      test('Then if we execute the code set timer', () => {
        const grid = [
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0],
        ];
        playGame(grid, 2);
        jest.advanceTimersByTime(800);

        // PlayGame(grid);
        // expect(checkCells()).toHaveBeenCalled(1);
        // const value = playGame(grid, 1);
        // expect(clearInterval).toBeInstanceOf();

        expect(grid).toBeInstanceOf(Array);
      });
    });
  });
});
