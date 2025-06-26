function solution(triangle) {
  // 초기값 선언
  const maxRow = triangle.length;

  // DP 배열 선언(기록용)
  const DP = new Array(maxRow).fill(null).map(() => new Array(maxRow).fill(-1));

  // DFS(+DP)
  function DFS(row, idx) {
    // 탐색 종료
    if (row === maxRow) return 0;

    // DP 배열에 이미 기록된 경우 해당 값 반환
    if (DP[row][idx] !== -1) return DP[row][idx];

    // 다음 탐색
    let result = 0;
    for (let idx_ of [idx, idx + 1])
      result = Math.max(result, triangle[row][idx] + DFS(row + 1, idx_));

    DP[row][idx] = result; // 메모이제이션(DP배열에 기록)
    return result;
  }

  // 함수 호출
  var answer = DFS(0, 0);

  return answer;
}
/* 🦩
코테용 알고리즘의 꽃이라고 할 수 있는 DP(Dynamic Programming, 동적 계획법)문제입니다.

만약 이 문제를 기록 배열없이 DFS로만 푼다면, O(2^삼각형 배열 length)의 시간복잡도가 발생할 것입니다.
배열 최대 length가 500이므로 O(2^500), 당연히 시간초과가 발생합니다. (시간초과 나는지는 2^30 정도를 기준으로 보면 됨)

DP의 핵심은, "이미 계산한 값은 다시 계산하지 않는다"입니다.
생각해보면 삼각형 내 어떤 점에서 시작해 최대로 얻을 수 있는 값은 정해져 있습니다.
따라서 내가 원하고자 하는 답을 구하기 위해 상위부터 시작해 재귀적으로 하위 문제를 호출하도록 설계되어 있습니다.
그리고 문제가 호출되어 답이 나오면 DP 배열에 저장되고, 만약 중간에 DP 배열에 저장되어 있는 곳을 호출하면 저장된 값을 가져옵니다.
(React.memo, useMemo, useCallback과 비슷하게 메모이제이션한다고 표현합니다.)

DP의 최대 계산 횟수는 DP 배열의 크기만큼입니다.
따라서 O(2^500)의 계산을 O(500 * 500)으로 줄인 것을 알 수 있습니다.

이처럼 상위 문제부터 호출을 시작해 하위 문제가 나중에 호출되는 방식을 Top-Down DP라고 부릅니다.
Top-Down DP는 이와 같이 일반적인 DFS에 메모용 배열을 첨가하는 방식으로 구현됩니다.

반면 상위 문제를 호출하지 않고 하위 문제부터 먼저 풀기 시작해 차근차근 상위 문제로 답을 쌓아가는 방식도 있습니다.
이를 Bottom-Up DP라고 부릅니다. 보통 반복문을 이용해 구현합니다.
*/

function solution(triangle) {
  // 초기값 선언
  const maxRow = triangle.length;

  // DP 배열 선언
  const DP = new Array(maxRow).fill(null).map(() => new Array(maxRow).fill(-1));

  // Bottom-Up DP
  for (let row = maxRow - 1; row >= 0; row--) {
    for (let idx = 0; idx <= row; idx++) {
      // 맨 아랫줄인 경우 자기 자신값만 기록
      if (row === maxRow - 1) {
        DP[row][idx] = triangle[row][idx];
        continue;
      }

      // 그렇지 않으면 계산
      let result = 0;
      for (let idx_ of [idx, idx + 1]) {
        result = Math.max(result, triangle[row][idx] + DP[row + 1][idx_]);
      }
      DP[row][idx] = result;
    }
  }

  // DP 배열로 답을 얻어냄
  var answer = DP[0][0];

  return answer;
}
