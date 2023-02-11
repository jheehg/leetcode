/**
문제)
- 식물에 물을 주기 위해 왼쪽에서 오른쪽으로 방향으로 이동한다.
- 물을 주면서 이동하다가 다음 식물에 물을 줄 수가 없는 경우 리필을 위해서 물통으로 돌아간다. (출발점으로 돌아간다)
- 물 리필은 미리 할 수는 없다.
- x 좌표상 -1에서 부터 시작한다.
- 현재 물을 줄 차례에 있는 식물이 필요한 물의 양을 한번에 줘야 한다. (나눠서 주지 않음)
- 모든 식물에게 물을 주기 위해 몇 스텝이 필요한지 리턴하기

plants => 식물이 얼마나 물이 필요한지 integer로 표시한 배열
capacity => 물의 양
*/

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = (plants, capacity) => {
  let step = 0;
  let capa = capacity;
  let n = -1;

  while (n < plants.length - 1) {
    const nextPlant = plants[n + 1];
    if (capa >= nextPlant) {
      capa -= nextPlant;
      n++;
      step++;
    } else {
      // go back to river to refill
      step += (n + 1) * 2;
      capa = capacity;
    }
  }
  return step;
};
