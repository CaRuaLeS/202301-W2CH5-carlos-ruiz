import { exampleFunc } from './sample';

describe('Given funct example', () => {
  describe('When the function is X', () => {
    test('Then it gives the same value', () => {
      const r = exampleFunc(3);
      expect(r).toEqual(3);
    });
    test('Then it gives the same value', () => {
      const r = exampleFunc(5);
      expect(r).toBe(5);
    });
    test('Then it gives the same value', () => {
      const r = exampleFunc('x');
      expect(r).toEqual('x');
    });
  });
});
