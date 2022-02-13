/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 마을에 있는 judge찾아서 label을 리턴하고 찾을 수 없으면  -1 리턴.
// trust[i] = [a, b], 주민은 1 ~ n까지의 유니크한 label을 가질 수 있응.
// a => 주민의 label을 의미, b => 주민 a가 신뢰하는 또 다른 주민의 label을 의미.

// 만약 judge가 마을에 존재한다면,
// 1) judge는 아무도 신뢰하지 않음.
// 2) judge를 제외한 모든 사람은 judge를 신뢰함.
// 3) 1, 2번을 모두 충족하는 사람은 딱 한명만 존재. <-- ?

// example.
// Input: n = 2, trust = [[1,2]]  Output: 2.
// 1번이 2번을 신뢰하고 2번은 아무도 신뢰하지 않으므로 2번이 judge.

// Input: n = 3, trust = [[1,3],[2,3],[3,1]]  Output: -1
// 서로 신뢰하는 관계이므로 judge는 존재하지 않음.

 var findJudge = function(n, trust) {
    const crew = new Array(n).fill(0);
    
    // 아무도 trust 대상이 없는 주민을 확인한다.
    for(let i = 0; i < trust.length; i++) {
        crew[trust[i][0] - 1] = trust[i][0];
    }
    // judge로 의심되는 대상이 1명이 아닌 경우에는 모두 judge가 있다고 판단할 수 없으므로 -1.
    let judge = crew.indexOf(0);
    if(judge < 0 || crew.lastIndexOf(0) !== judge) return -1;

    let cnt = 0;
    // 모든 주민이 judge로 의심되는 대상을 모두 신뢰하고 있어야 한다.
    for(let i = 0; i < trust.length; i++) {
        if(trust[i][1] === judge + 1) cnt++;
    }
    return (cnt === n - 1)? judge + 1: -1;

};





