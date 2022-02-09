/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */

// x, y 좌표에 직사각형이 두 개 주어진다. [x1, y1, x2, y2]
// x1, y1은 bottom-left 코너 / x2, y2는 top-right 코너
// 주어진 직사각형이 서로 겹쳐질경우 true 아니면 false. 
// * 서로 맞닿아 있는 건 겹쳐진 것이 아님.
// * rec1, rec2는 반드시 length가 4임.
// * 면적이 0일 경우는 없음.

 var isRectangleOverlap = function(rec1, rec2) {
    // 겹쳐지지 않는 경우 확인
    // 1) rec1의 왼쪽에 rec2가 있는 경우.
    // rec1[0] >= rec2[2]
    // 2) rec1의 오른쪽에 rec2가 있는 경우.
    // rec1[2] <= rec2[0]
    // 3) rec1의 아래에 rec2가 있는 경우.
    // rec1[1] >= rec2[3]
    // 4) rec1의 위에 rec2가 있는 경우.
    // rec1[3] <= rec2[1]

    if(rec1[0] >= rec2[2] || rec1[2] <= rec2[0] ||
        rec1[1] >= rec2[3] || rec1[3] <= rec2[1]) return false;
    else return true;
};