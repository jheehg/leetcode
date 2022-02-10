/**
 * @param {number} n
 * @return {number}
 */

// 주어진 n개의 코인으로 계단 모양을 만드는데
// 총 완성되는 계단의 층 수를 리턴하기.

// example.
// n = 5, output = 2
// 1 + 2 + 2 (1층 -> 2층 -> 3층) 순서로 만들어지는데 3층에는 3개가 필요한데 2코인만 있으므로
// 만들어지는 층 수는 2층.

 var arrangeCoins = function(n) {
    let rows = 1;
    // 남은 n이 rows와 같거나 작아질떄까지 반복.
    while(n > rows) {
        n -= rows;
        rows++;
    } 
    // 마지막 남은 코인 수가 rows층을 다 채울 수 있으면 rows 리턴, 아니면 rows - 1
    return (n === rows)? rows : rows - 1; 
};



