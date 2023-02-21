export const getFizzBuzzNumbers = (input) => {
  const isDivisibleBy3 = input % 3 === 0;
  const isDivisibleBy5 = input % 5 === 0;
  if (isDivisibleBy3 && isDivisibleBy5) return 'FizzBuzz';
  if (isDivisibleBy5) return 'Buzz';
  if (isDivisibleBy3) return 'Fizz';

  return input;
};
