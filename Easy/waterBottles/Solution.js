/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

 // numBottles : 마실수 있는 물병 수
 // numExchange : 새 물병 1개와 교환할 수 있는 빈병 수
 // 주어진 numBottles, numExchange를 기준으로 마실 수 있는 물병 수 max값을 구하기.

var numWaterBottles = function(numBottles, numExchange) {
    var exchangeableBottle = 0;
    var emptyBottles = numBottles;

    while(Math.floor(emptyBottles / numExchange) > 0) {
        // 교환할 수 있는 빈병 수
        exchangeableBottle = Math.floor(emptyBottles / numExchange);
        // 교환해서 얻은 물병 수 + 지금까지 마신 물병 수 : max값 갱신
        numBottles += exchangeableBottle;
        // 교환해서 얻은 물병 마시고 난 후, 빈병 수 확인
        emptyBottles = exchangeableBottle + (emptyBottles % numExchange);
    }
    return numBottles;
};