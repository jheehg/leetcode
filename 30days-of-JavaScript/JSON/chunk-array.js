/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    result.push([...arr.slice(i, size + i)]);
    i += size;
  }

  return result;
};
