function solution(m, n, puddles) {
  // 초기값 선언
  const BIG_NUMBER = 1_000_000_007;

  // 웅덩이 기록
  const Map = new Array(m).fill(null).map(() => new Array(n).fill(false));
  for (let [puddleX, puddleY] of puddles) Map[puddleX - 1][puddleY - 1] = true;

  // DP 배열 선언
  const DP = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  DP[m - 1][n - 1] = 1;
  for (let x = m - 2; x >= 0; x--) {
    if (Map[x][n - 1]) DP[x][n - 1] = 0;
    else DP[x][n - 1] = DP[x + 1][n - 1];
  }
  for (let y = n - 2; y >= 0; y--) {
    if (Map[m - 1][y]) DP[m - 1][y] = 0;
    else DP[m - 1][y] = DP[m - 1][y + 1];
  }

  // DP 배열 채우기 (Bottom-Up)
  for (let x = m - 2; x >= 0; x--) {
    for (let y = n - 2; y >= 0; y--) {
      // 웅덩이인 경우
      if (Map[x][y]) {
        DP[x][y] = 0;
        continue;
      }

      // 웅덩이가 아닌 경우
      const value = (DP[x + 1][y] + DP[x][y + 1]) % BIG_NUMBER;
      DP[x][y] = value;
    }
  }

  // DP 배열에서 정답 확인
  var answer = DP[0][0];

  return answer;
}

/* 🦩
역시나 DP문제입니다.
특이한 점은 이 문제를 처음에 Top-Down으로 해결했더니 시간초과가 발생했습니다.
이 경우 Bottom-Up으로 접근해 문제를 해결해야 합니다.

Top-Down은 재귀를 이용하므로 콜스택이 많이 사용되지만, Bottom-Up은 단순 반복문이기에 시간면에서 유리합니다.
*/
