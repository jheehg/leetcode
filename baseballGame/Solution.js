const calPoints = (ops) => {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    // 'C', 'D', '+' 보다는 숫자가 더 많이 나오면 먼저 체크하는게 좋지 않을까?
    let isNum = Number.isInteger(Number(ops[i]));
    if (isNum) {
      result.push(Number(ops[i]));
    } else {
      if (ops[i] === "C") {
        result.pop();
      } else if (ops[i] === "D") {
        result.push(result.at(-1) * 2);
      } else if (ops[i] === "+") {
        result.push(result.at(-1) + result.at(-2));
      }
    }
  }

  return result.reduce((prev, curr) => prev + curr, 0);
};
