const sum = (arr) => {
  return arr.reduce((prev, curr) => Number(prev) + Number(curr), 0);
};

const addDigits = (num) => {
  if (num < 10) return num;

  let result = num;

  while (result > 9) {
    result = sum(String(result).split(''));
  }
  return result;
};
