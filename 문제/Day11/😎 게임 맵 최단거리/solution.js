class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  var answer = -1;

  // 초기값 선언
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = new Array(n).fill(null).map(() => new Array(m).fill(false));
  const queue = new Queue();

  // queue에 초기값 넣기
  queue.push([0, 0, 1]);

  // BFS
  while (!queue.isEmpty()) {
    const [X, Y, count] = queue.pop();

    // 도착
    if (X === n - 1 && Y === m - 1) {
      answer = count;
      break;
    }

    // 탐색 불가 조건
    if (X < 0 || X >= n || Y < 0 || Y >= m) continue;
    if (maps[X][Y] === 0) continue;
    if (visited[X][Y]) continue;

    // 탐색
    visited[X][Y] = true;

    // 다음 탐색
    for (let i = 0; i < 4; i++) {
      const X_ = X + dx[i];
      const Y_ = Y + dy[i];
      queue.push([X_, Y_, count + 1]);
    }
  }

  return answer;
}

/* 🦩
역시 그래프 내에서 최단 거리를 물어보고 있으므로, 9일차와 비슷하게 BFS를 이용한다.
BFS를 위한 큐를 이번에는 연결 리스트를 이용해 구현했다. 시간 복잡도를 보니 이번 문제에선 배열의 push와 shift 메서드를 사용해도 충분히 통과할 순 있다.

이번 문제와 같이 2차원 지도형태의 입력을 주고 그 안에서 그래프 탐색을 하는 방식을 Flood-fill 문제라고 한다.
코테를 준비하며 알고리즘 문제를 풀다보면 굉장히 빈번하게 나오는 유형이다.
*/
