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
  it('should return fizz if the input is 3', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(3);
    expect(response).toBe('Fizz');
  });
  it('should return number 4', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(4);
    expect(response).toBe(4);
  });
  it('should return Buzz if the input is 5', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(5);
    expect(response).toBe('Buzz');
  });
});
