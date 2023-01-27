import { exampleFunc } from './sample';

describe('Given funct example', () => {
  describe('When the function is X', () => {
    test('Then it gives the same value', () => {
      const r = exampleFunc(2);
      expect(r).toEqual(2);
    });
  });
});
