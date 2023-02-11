// 2022.02.08

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// 주어진 문자열 s중 두 개의 숫자를 swap했을 때, goal과 문자열이 같으면 true 반환, 아니면 false.

// Example.
//  Input: s = "ab", goal = "ba"
//  Output: true

// Input: s = "ab", goal = "ab"
// Output: false

// true 조건.
// 1) s === goal 일떄, 같은 요소가 2개 이상 발생 시.
// 2) s, goal 길이가 같으면서 s !== goal 일때,
//    s[i] !== goal[i] 인 경우가 2건만 발생. => swap해서 맞으면 true.

var buddyStrings = function (s, goal) {
  // 1번
  if (s === goal) {
    for (let i = 0; i < s.length; i++) {
      if ([...s].lastIndexOf(s[i]) !== i) return true;
    }
    // 2번
  } else if (s !== goal && s.length === goal.length) {
    let dif = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        dif.push(i);
        if (dif.length > 2) return false;
      }
    }
    if (dif.length < 2) return false;
    else return s[dif[0]] === goal[dif[1]] && s[dif[1]] === goal[dif[0]];
  }
  return false;
};
