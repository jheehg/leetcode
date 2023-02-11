/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let str = t;
  for (let i = 0; i < s.length; i++) {
    const idx = str.indexOf(s[i]);
    if (idx > -1) {
      str = str.slice(idx + 1);
    } else {
      return false;
    }
  }
  return true;
};
