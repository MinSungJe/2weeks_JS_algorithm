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
