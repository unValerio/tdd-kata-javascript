export const getFizzBuzzNumbers = (input) => {
  const isDivisibleBy3 = input % 3 === 0;

  if (isDivisibleBy3) return 'Fizz';
  if (input === 5) return 'Buzz';
  return input;
};
