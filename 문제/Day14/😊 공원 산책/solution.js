function solution(park, routes) {
  // 초기값 선언
  const N = park.length;
  const M = park[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const direction = { N: 0, S: 1, W: 2, E: 3 };
  const Map = park.map((row) => row.split(''));

  // 처음 시작 위치 확인
  let X = 0;
  let Y = 0;
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (Map[x][y] === 'S') {
        X = x;
        Y = y;
      }
    }
  }

  // 명령어 따라 이동
  for (let route of routes) {
    const [op, n] = route.split(' ');

    // 이동하는 경로 확인
    let canGo = true;
    let X_ = X;
    let Y_ = Y;
    for (let i = 0; i < Number(n); i++) {
      // 이동
      X_ += dx[direction[op]];
      Y_ += dy[direction[op]];

      // 이동 불가 조건 확인
      if (X_ < 0 || X_ >= N || Y_ < 0 || Y_ >= M || Map[X_][Y_] === 'X') {
        canGo = false;
        break;
      }
    }

    // 반영
    if (canGo) {
      X = X_;
      Y = Y_;
    }
  }

  // 결과 기록
  var answer = [X, Y];

  return answer;
}
