const oddishOrEvenish = (number) => {
  sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  if (sum % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(oddishOrEvenish(43));
