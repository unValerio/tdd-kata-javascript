function isDivisible(number, by) {
  return number % by === 0;
}

export const getFizzBuzzNumbers = (input) => {
  if (isDivisible(input, 3) && isDivisible(input, 5)) return 'FizzBuzz';
  if (isDivisible(input, 5)) return 'Buzz';
  if (isDivisible(input, 3)) return 'Fizz';

  return input;
};
