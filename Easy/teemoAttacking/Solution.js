/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */

// teemo는 ashe를 공격할 수 있음.
// 한번 공격하면 duration 만큼 시간이 지속됨.
// 만약 duration이 끝나기 전에 또 다른 공격을 시도하면, 즉시 리셋되고 다시 duration만큼의 공격이 지속됨.
// ashe가 teemo에게 공격받는 총 시간을 리턴하기.

// example.
// Input: timeSeries = [1,4], duration = 2, Output: 4
// => 1초-2초 (지속시간: 2) + 4초-5초 (지속시간: 2) = 총 4초
// Input: timeSeries = [1,2], duration = 2, Output: 3
// => 1초 (지속시간: 1. 중간에 리셋됨.) + 2초-3초 (지속시간: 2) = 총 3초

var findPoisonedDuration = function(timeSeries, duration) {
    // 모두 duration만큼 다 공격 했을 경우의 총 second.
    let totSecnd = timeSeries.length * duration;

    for(let i = 0; i < timeSeries.length - 1; i++) {
        let scndGap = timeSeries[i + 1] - timeSeries[i];
        // 공격이 리셋된 경우만 체크해서 총 second에서 마이너스.
        if(scndGap < duration) {
            totSecnd = totSecnd - duration + scndGap;
        }
    }
    return totSecnd;
}

