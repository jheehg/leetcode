/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (let i = 0; i < t.length; i++) {
    const key = map.get(s[i]);
    if (!key) {
      if ([...map.values()].includes(t[i])) return false;
      map.set(s[i], t[i]);
    } else {
      if (key !== t[i]) return false;
    }
  }
  return true;
};
