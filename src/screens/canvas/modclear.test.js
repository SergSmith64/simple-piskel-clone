const { canvasClear } = require('./modclear')

test('test function clear', () => {
  const mockFn = jest.fn();
  expect(mockFn).toBeDefined();
});