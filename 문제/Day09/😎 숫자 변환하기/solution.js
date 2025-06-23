// queue 구현(간단 버전)
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  shift() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(x, y, n) {
  // 모든 탐색이 되지 않은 경우 -1
  var answer = -1;

  // 초기값 선언
  const queue = new Queue();
  queue.push([x, 0]);
  const visited = new Array(y + 1).fill(false);

  // BFS
  while (!queue.isEmpty()) {
    const [X, count] = queue.shift();

    // 탐색 불가 조건
    if (X > y) continue;
    if (visited[X]) continue;

    // 탐색
    if (X === y) {
      // y 도착
      answer = count;
      break;
    }
    visited[X] = true;

    // 다음 탐색
    for (let X_ of [X + n, X * 2, X * 3]) queue.push([X_, count + 1]);
  }

  return answer;
}

/* 🦩
DFS와 함께 그래프 탐색에서 자주 나오는 BFS 유형 문제.

DFS는 완전 탐색이 컨셉이라면, BFS는 "최소 탐색"이 컨셉이다.
DFS가 한 가지 경우 모두 이동하며 탐색 -> 다음 경우 모두 이동하며 탐색 -> ... 이런 순이라면,
BFS는 1번 이동한 경우 모두 탐색 -> 2번 이동한 경우 모두 탐색 -> ... 라서, 최소 번째 탐색을 찾을 때 유용하다.
이 문제에서도 최소 연산 횟수를 요구하고 있기 때문에, BFS 접근이 적합하다.

BFS는 자료 구조 중 큐를 이용하는데, 문제는 큐가 스택과 달리 코테 자바스크립트 환경에서 지원해주는 라이브러리가 없다는 것이다.
따라서 시간 복잡도 상 이득을 보기 위해선, 큐를 직접 구현해야 된다.
연결 리스트를 이용해 구현하는 게 가장 정석이지만, 코드가 너무 길어서 야매로 배열을 이용해 큐를 구현했다.
이렇게 구현하면 값이 실제로 빠지진 않고 참조하는 index만 달라지는 거라서, 메모리를 많이 잡아먹는 단점이 있다.
*/
