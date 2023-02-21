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
  it('should return Fizz if the input is 3', () => {
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
  it('should return Fizz if the input is 6', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(6);
    expect(response).toBe('Fizz');
  });
  it('should return Fizz if the input is 7', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(7);
    expect(response).toBe(7);
  });
  it('should return Fizz if the input is 8', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(8);
    expect(response).toBe(8);
  });
  it('should return Fizz if the input is 9', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(9);
    expect(response).toBe('Fizz');
  });
  it('should return Buzz if the input is 10', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(10);
    expect(response).toBe('Buzz');
  });
  it('should return FizzBuzz if the input is 15', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(15);
    expect(response).toBe('FizzBuzz');
  });
  it('should return FizzBuzz if the input is 30', () => {
    const response = fizzBuzz.getFizzBuzzNumbers(30);
    expect(response).toBe('FizzBuzz');
  });
});
