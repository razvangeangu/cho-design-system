import { scaleBetween } from './scale-between';

describe('scaleBetween', () => {
  it('should scale', () => {
    const { min, max, value } = scaleBetween(10, 0, 20, 0, 100);

    expect(min).toBe(0);
    expect(max).toBe(100);
    expect(value).toBe(50);
  });
});
