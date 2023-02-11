/**
 * @param {number[]} bills
 * @return {boolean}
 */

// 레모네이드 가격 = $5 
// 각 손님들은 $5, $10 또는 $20 을 지불할 수 있고 계산은 줄을 선 순서대로 함.
// 모든 손님들에게 맞는 거스름돈을 계산할 수 있으면 true, 아니면 false 반환.

// example.
// Input: bills = [5,5,5,10,20], Output: true
// 거스름돈을 돌려줘야 하는 손님은 4th, 5th고, $5 + $15 = $20의 거스름돈이 필요.
// 3rd까지 빋은 돈 $15에서 $5를 4th 손님에게 주고 남은 $10 + $5 + $5로 5th 손님에게도 거스름돈을 줄 수 있음.

 var lemonadeChange = function(bills) {
    const pocket = {'5': 0, '10': 0, '20': 0};
    for(let i = 0; i < bills.length; i++) {
        let change = bills[i] - 5;
        // $10이면 현재 있는 $5 확인
        // $20이면 현재 있는 ($5, $10) 또는 ($5 * 3) 확인
        if(change === 5) {
            pocket['5']--;
           
        } else if(change > 5) {
            if(pocket['10'] > 0) {
                pocket['10']--;
                pocket['5']--;
            } else {
                pocket['5']-=3;
            } 
        }
        if(pocket['5'] < 0) return false;
        pocket[bills[i]]++;
    }

    return true;
};