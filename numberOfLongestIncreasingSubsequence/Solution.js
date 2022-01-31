/**
 * @param {number[]} nums
 * @return {number}
**/


/*
주어진 nums라는 배열에서 증가하는 패턴을 가지면서 가장 긴 배열의 경우의 수를 리턴하기.

Example1.
input: nums = [1,3,5,4,7]
output: 2
1,3,4,7 or 1,3,5,7 => 두가지 경우

Example2.
nums = [2,2,2,2,2]
output: 5
증가되면서 가장 긴 배열의 length는 1 * 5 (동일한 숫자가 5개) => 다섯가지 경우

Solution.
2차원 테이블 구성해서 각 length별로 연속적인 숫자의 배열이 구성되는지 확인한다.

          1  3  5  4  7
--------------------------------  
1         1  1  1  1  1     -> 하나만 선택할 수 있을 때는 각각 경우의 수 1
2         0  1  2  2  4     -> 선택가능한 수 2개일때 
3         0  0  1  1  5     -> 선택가능한 수 3개일때 
4         0  0  0  0  2     -> 선택가능한 수 4개일때 
5         0  0  0  0  0     -> 선택가능한 수 5개일때

nums[0] ~ nums[n-1] 중에서 nums[n]보다 작은 숫자들이 연속되는 경우의 수 합 
(여기서 nums[n]는 연속된 배열의 가장 마지막 인덱스로 반드시 포함된다.) 
*/

 var findNumberOfLIS = function(nums) {
    let n = nums.length;
    let arr = new Array(n);

    // 2차원배열 초기화
    for(let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(0);
    }
    // 합 구하기
    function sumLessThan(len, idx) {
        let cnt = 0;
        for(let i = 0; i < idx; i++) {
            if(nums[i] < nums[idx]) {
                cnt += arr[len - 1][i];  
            }
        }
        return cnt;
    }

    let totCnt = 0;
    for(let i = 0; i < n; i++) {
        let prvCnt = totCnt;
        totCnt = 0;
        let chk = false;
        for(let j = 0; j < n; j++) {
            if (i === 0) {
                // 하나만 선택할 경우는 무조건 1가지만 발생함.
                arr[i][j] = 1;
            } else if (i <= j) {
                arr[i][j] = sumLessThan(i, j);
                // nums[0] ~ nums[n-1] 까지 연속되는 수인지 확인해서 맞으면 1 리턴.
                if(arr[i][j] - arr[i][j - 1] === 1 && arr[i][j] === j) chk = true;
                else chk = false;
            } 
            totCnt += arr[i][j];
        }
        if(chk) return 1;
        // 현재 선택할 수 있는 요소의 갯수들이 연속되는 경우가 0건이라면 기존에 발생한 모든 경우의 수 합을 리턴한다.
        if(totCnt === 0) return prvCnt;
    }
     
    return totCnt;
};
