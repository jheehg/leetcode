/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  (i = 0), (j = 1), (tmp = 0);
  yield 0;
  while (true) {
    yield j;
    tmp = j;
    j = i + j;
    i = tmp;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
