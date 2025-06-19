function solution(numbers, target) {
  // DFS 함수 정의
  function DFS(idx, value) {
    // 탐색 종료(최대 깊이까지 탐색함)
    if (idx === numbers.length) {
      if (value === target) return 1;
      return 0;
    }

    // 다음 탐색
    let answer = 0;
    for (let multiplyer of [-1, 1]) {
      const value_ = value + multiplyer * numbers[idx];
      answer += DFS(idx + 1, value_);
    }

    return answer;
  }

  // 함수 호출
  var answer = DFS(0, 0);

  return answer;
}

/* 🦩
DFS 함수에서 특정 값을 반환하도록 구현하지 않아도 됩니다.
상위 스코프의 answer에 직접 값을 추가하도록 구현할 수 있어요!
*/

function solution(numbers, target) {
  var answer = 0;

  // DFS 함수 정의
  function DFS(idx, value) {
    // 탐색 종료(최대 깊이까지 탐색함)
    if (idx === numbers.length) {
      if (value === target) answer += 1;
      return;
    }

    // 다음 탐색
    for (let multiplyer of [-1, 1]) {
      const value_ = value + multiplyer * numbers[idx];
      DFS(idx + 1, value_);
    }
  }

  // 함수 호출
  DFS(0, 0);

  return answer;
}
