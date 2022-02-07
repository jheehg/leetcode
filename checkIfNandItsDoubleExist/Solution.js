/**
 * @param {number[]} arr
 * @return {boolean}
 */

// 정수로 구성된 arr 배열안에서 두 정수 N, M이 N = 2 * M 관계가 성립할 경우 true, 아니면 false 반환.
// arr[i] = N, arr[j] = M
// i != j,
// 0 <= i,j < arr.length

// Example.
// Input) arr = [10,2,5,3]
// Output) true
// 10 = 2 * 5

var checkIfExist = function(arr) {
    for(let i = 0; i < arr.length; i++) {
        let findNum = arr.indexOf(arr[i] * 2);
        // arr[i] * 2 되는 요소가 있는지 찾되 자기자신은 제외.
        if(findNum > -1 && findNum !== i) return true;    
    }

    return false;
};

