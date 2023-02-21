import * as fizzBuzz from './fizzBuzz';

describe('fizzBuzz', () => {
  it('should return number 1', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(1);
    expect(response).toBe(1);
  });
  it('should return number 2', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(2);
    expect(response).toBe(2);
  });
});
