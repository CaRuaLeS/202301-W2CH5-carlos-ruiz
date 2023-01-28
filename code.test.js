import { buildGrid } from './index';

describe('Given the function to create a grid', () => {
  describe('When the grid has to values', () => {
    test('Then if add 4 colums and 3 rows', () => {
      const r = buildGrid(4, 3);
      expect(r).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0],
      ]);
    });
  });
});
