/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cacheMap = new Map();

  return function (...args) {
    if (args.length > 0) {
      let key = args.join('.');
      let cachedItem = cacheMap.has(key);

      if (!cachedItem) {
        cacheMap.set(key, fn(...args));
      }
      return cacheMap.get(key);
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
