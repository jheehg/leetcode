/**
 * @param {number[][]} moves
 * @return {string}
 */

 var tictactoe = function(moves) {
     // 최소 A플레이어가 3턴까지는 진행해야 승부가 남.
    if(moves.length < 5) return "Pending";
      
    // 모든 라인에 대해 결과를 체크.
    // 가로 3줄, 세로 2줄, 대각선 2줄
    const resultA = {
        C0: [0,0,0], C1: [0,0,0], C2: [0,0,0],
        R0: [0,0,0], R1: [0,0,0], R2: [0,0,0],
        V0: [0,0,0], V1: [0,0,0]        
    };
    const resultB = {
        C0: [0,0,0], C1: [0,0,0], C2: [0,0,0],
        R0: [0,0,0], R1: [0,0,0], R2: [0,0,0],
        V0: [0,0,0], V1: [0,0,0]        
     };
    for(let i = 0; i<moves.length; i++) {
        if(i % 2 === 0) {
            if(setCount(moves[i], resultA) !== '') return 'A';
        } else {
            if(setCount(moves[i], resultB) !== '') return 'B';
        }
    }
      
    function setCount(move, result) {
        // 가로,세로 카운트
        result['C'+move[1]][move[0]]++;
        result['R'+move[0]][move[1]]++;

        // 대각선 카운트
        if(move[0] === 0 && move[1] === 2) result['V1'][0]++;
        else if(move[0] === 2 && move[1] === 0) result['V1'][2]++;
        else if(move[0] === move[1]) {
            if(move[0] === 1 && move[1] === 1) result['V1'][1]++;
            result['V0'][move[0]]++;
        }
      
        // 카운트가 끝나면 현재 [1, 1, 1]이 완성된 라인을 확인해서 결과를 리턴함.
        if(!result['C'+move[1]].includes(0) || !result['R'+move[0]].includes(0) 
        || !result['V0'].includes(0) || !result['V1'].includes(0)) return 'O';
      
        return '';
    }
    return (moves.length < 9)? 'Pending' : 'Draw';

  };