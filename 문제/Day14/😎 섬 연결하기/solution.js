function solution(n, costs) {
  var answer = 0;

  // union-find
  const parents = new Array(n).fill(null).map((_, i) => i);
  function find(node) {
    if (node === parents[node]) return node;
    parents[node] = find(parents[node]); // 경로 단축
    return parents[node];
  }

  function union(node1, node2) {
    const parent1 = find(node1);
    const parent2 = find(node2);
    if (parent1 === parent2) return;
    if (parent1 < parent2) parents[parent2] = parent1;
    else parents[parent1] = parent2;
  }

  // 가장 비용이 작은 경로부터 탐색(크루스칼 알고리즘)
  costs.sort((a, b) => a[2] - b[2]);
  for (let [node1, node2, cost] of costs) {
    // 만약 이미 연결되어 있으면 continue
    if (find(node1) === find(node2)) continue;

    // 연결
    union(node1, node2);
    answer += cost;
  }

  return answer;
}

/* 🦩
14일의 마지막 문제입니다! 고생 많으셨습니다. 😎

그래프 이론 중 "최소 스패닝 트리"를 구하는 문제이다.

모든 노드를 이으며 간선에 주어진 가중치가 가장 낮은 그래프를 최소 스패닝 트리라고 부른다.
섬을 노드로 보고, 경로를 간선으로 보면 최소 스패닝 트리를 요구하는 문제임을 알 수 있다.

최소 스패닝 트리를 구하는 방법엔 크게 크루스칼 알고리즘과 프림 알고리즘이 있다.
그 중 프림 알고리즘은 우선순위 큐(=힙)을 활용한다. (다익스트라 알고리즘과 비슷한 풀이이다.)
자바스크립트에서 우선순위 큐를 구현하기 번거로워서 이번에는 크루스칼 알고리즘을 이용해 문제를 해결했다.

크루스칼 알고리즘은 union-find라는 서로소 집합 관련 알고리즘을 활용한다.
union-find 알고리즘은 두 노드가 현재 같이 연결되어 있는지(다른 노드를 통해서 해당 노드로 갈 수 있는지) 여부를 빠르게 확인할 수 있는 알고리즘이다.
이를 이용해 그리디하게 접근해 최소 스패닝 트리를 구하는 알고리즘이 크루스칼 알고리즘이다.

크루스칼 알고리즘의 아이디어는 다음과 같다.
- 비용이 적은 경로부터 연결한다.
- 이미 연결되어 있는 노드 간에 새로운 경로를 연결하지 않는다. (이미 도로가 뚫려있는데 고속도로를 새로 뚫을 필요가 없다.)
따라서 비용이 낮은 경로부터 확인하는데, union-find 알고리즘을 이용해 두 노드가 연결된 상태인지 점검하고 연결되어 있지 않다면 그 때 간선을 연결한다.
*/
