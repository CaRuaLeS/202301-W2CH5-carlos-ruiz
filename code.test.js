import { buildGrid, addCell } from './structure';

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
  describe('When you want to add a cell', () => {
    test('Then you set the position index 1, 1, and the grid changes', () => {
      const grid = buildGrid(3, 3);
      addCell(grid, 1, 1);
      expect(grid).toEqual([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
    });
  });
});
