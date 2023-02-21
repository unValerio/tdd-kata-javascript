import * as fizzBuzz from './fizzBuzz';

describe('fizzBuzz', () => {
  it('should return number 1', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(1);
    expect(response).toBe(1);
  });
});
