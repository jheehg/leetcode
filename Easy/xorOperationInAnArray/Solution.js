/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// n개의 길이 배열은 다음과 같은 요소로 구성.
// nums[i] = start + (2 * i);
// nums배열의 모든 요소를 XOR 비트연산한 값을 구하기.

var xorOperation = function(n, start) {
    var ans = 0;
    for(var i = 0; i < n; i++) {
        ans ^= start + ( 2 * i );
    }
    return ans;
};