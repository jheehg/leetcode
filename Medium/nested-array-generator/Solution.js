/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
  i = 0;
  result = arr;
  while (i < result.length) {
    if (Array.isArray(result[i])) {
      result.splice(i, 1, ...result[i]);
    } else {
      yield result[i++];
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
