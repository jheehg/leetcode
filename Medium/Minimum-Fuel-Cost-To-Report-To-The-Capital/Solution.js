/**
트리 (노드는 서로 연결 되었지만 사이클은 없음) 구조가 있고 0 부터 n - 1 는 각 도시의 번호를 의미한다.
n - 1 만큼의 경로가 존재한다. capital 은 도시 번호 0 으로 표시한다.

미팅을 위해 각 도시 대표들은 capital 에 가야한다.
각 도시 대표들은 차를 타고 가며 차를 바꿀수도 있고 다른 도시 대표와 같이 함께 갈수도 있다.
capital 에 도착하기까지 필요한 최소 fuel 을 리턴해라 (하나의 도시를 이동하는 비용은 1 리터)

roads => 서로 바로 맞닿아 있는 경로 [a, b] 를 요소로 가지고 있는 2차원 배열
seats => 각 도시에서 가지고 있는 차의 좌석 수
 */

// ! Solution 참고하고 풀어서 커밋은 따로 안함.

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */

const minimumFuelCost = function (roads, seats) {
  // ! 1. 트리에서 서로 인접한 두 노드가 연결되어 있다는걸 저장하기 위해 아래 함수를 실행한다
  const adjList = createAdjacencyList(roads);

  let ans = 0;

  const dfs = (curNode, preNode) => {
    let people = 1;
    // ! 6. 서로 맞닿은 노드들을 탐색하는데 만약 인접한 노드가 부모일 경우에는 카운트를 하지 않는다. (인접한 노드가 부모 밖에 없으면 리프노드를 의미함)
    for (let child of adjList[curNode]) {
      if (child !== preNode) {
        people += dfs(child, curNode);
      }
    }
    // ! 현재 루트노드인 0 제외, 이동할때마다 1 증가하되 현재 포함된 사람 수가 seat 를 넘으면 이동할때마다 2, 3, 4씩 증가한다.
    // ! 예를들어 2 -> 3 -> 1 -> 0 이고, seat가 2일때
    // ! 2 -> 3 까지는 사람수 2명이니 차가 1대라서 이동할때마다 +1
    // ! 3 -> 1 이면 사람수가 3명이니 차가 2대가 되고 이동할때마다 + 2가 된다.
    // ! 정리하면 0에서 각 경로를 출발해 리프노드까지 갔다가 리프에서 0으로 오면서 카운트를 한다고 생각하면 됨.
    // ! 리프노드는 인접한 요소가 부모밖에 없고 people 은 1만 카운트 됨.
    if (curNode) ans += Math.ceil(people / seats);

    return people;
  };
  // ! 5. createAdjacencyList 실행을 통해 인접한 노드를 모두 저장했다면 dfs 를 시작한다.
  // ! 최초의 탐색은 노드 0부터 시작이고 0의 부모노드는 없기 떄문에 -1로 넣어준다.
  dfs(0, -1);

  return ans;
};

const createAdjacencyList = (edges) => {
  // ! 2. 트리가 가지게 되는 경로가 3이라면 트리의 노드는 4개이다. 경로: n - 1, 노드: n
  // ! 3. 각각의 노드별로 인접하고 있는 노드를 기록해야 하므로 트리를 구성하는 노드의 개수 만큼 배열을 만든다.
  const N = edges.length;
  const adjList = Array(N + 1)
    .fill()
    .map(() => []);

  // ! 4. 예를 들어 0,1 가 서로 인접해 있으면 구성되는 배열은 다음과 같다. => [0, 1] - [1, 0]
  for (const edge of edges) {
    const [node1, node2] = edge;
    adjList[node1].push(node2);
    adjList[node2].push(node1);
  }
  return adjList;
};
