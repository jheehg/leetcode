/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  let stringified = JSON.stringify(obj);
  return stringified === '{}' || stringified === '[]';
};
