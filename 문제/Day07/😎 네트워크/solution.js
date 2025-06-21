function solution(n, computers) {
  var answer = 0;

  // 방문 배열 선언
  const visited = new Array(n).fill(false);

  // DFS 함수 선언
  function DFS(idx) {
    // 탐색 불가 조건
    if (visited[idx]) return;

    // 탐색
    visited[idx] = true;

    // 다음 탐색
    for (let nextComputer = 0; nextComputer < n; nextComputer++) {
      if (nextComputer === idx) continue; // 같은 컴퓨터 탐색 방지
      if (computers[idx][nextComputer] === 0) continue; // 네트워크 연결 X
      DFS(nextComputer); // 다음 컴퓨터 탐색
    }
  }

  // 모든 컴퓨터 탐색 시작
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue; // 이미 탐색된 컴퓨터임

    // 탐색 시작 및 정답 기록
    DFS(i);
    answer += 1;
  }

  return answer;
}
