/**
 * @param {number} columnNumber
 * @return {string}
 */

// excel sheet에 표시되는 순서와 매칭되는 컬럼 타이틀을 리턴하기.
// Example.
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

 var convertToTitle = function(columnNumber) {
    var answer = [];
    var a_charCode = 'A'.charCodeAt();
    // 1. 주어진 숫자를 26(A~Z까지 한 세트)으로 계속 나눠서 생긴 나머지를 문자로 치환하여 가장 첫번째 인덱스에 붙이기.
    // 나머지가 1이면 A, 2는 B, ... 
    // 2. 26으로 나눠서 떨어지는 숫자가 0보다 클 경우 0이 될때까지 다시 1번 반복.
    // 나머지가 0일 경우 치환되는 문자는 Z이고, 무의미하게 발생되는 sets 1은 현재 sets에서 마이너스함.
 
    var sets = 1;
    while(sets > 0) {
        var letter = 'Z';
        sets = Math.floor(columnNumber / 26);
        var rest = columnNumber % 26;
        if(rest > 0) {
            letter = String.fromCharCode(a_charCode + (rest - 1));    
        } else { // rest === 0
            sets--;
        }
        answer = [letter, ...answer];
        columnNumber = sets;
    }

    return answer.join('');

};