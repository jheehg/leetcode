Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  // 주어진 row, col 카운트로 2차원 배열 초기화
  const result = [];
  for (let i = 0; i < rowsCount; i++) {
    result[i] = [];
    for (let j = 0; j < colsCount; j++) {
      result[i][j] = 0;
    }
  }

  let r = 0,
    c = 0,
    i = 0;
  let value = 1;

  // 1. 배열의 모든 수를 다 채울떄까지 반복
  while (i < this.length) {
    result[r][c] = this[i];

    // 3. col 인덱스를 증가하고 난 후 다시 1 또는 -1 만큼 더해주기 위해 value 값을 변경한다
    if (value === 0 && r === 0) value = 1;
    else if (value === 0 && r === rowsCount - 1) value = -1;

    // 2. column 의 인덱스가 가장 마지막이거나 가장 처음일 경우
    // row 인덱스는 유지, col 인덱스 1 증가
    if (
      (r === rowsCount - 1 && value !== -1) ||
      (r === 0 && i > 0 && value !== 1)
    ) {
      value = 0;
      c++;
    }

    r += value;
    i++;
  }

  return result;
};
