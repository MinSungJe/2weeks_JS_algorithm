function solution(k, score) {
  var answer = [];

  // 발표된 가수의 점수를 담는 배열 선언
  const current = [];

  // 가수 점수 넣으면서 확인
  for (let oneScore of score) {
    current.push(oneScore);

    // 정렬
    current.sort((a, b) => b - a);

    // 명예의 전당 목록
    const specialList = current.slice(0, k);

    // 최하위 점수 넣기
    answer.push(specialList[specialList.length - 1]);
  }

  return answer;
}

/* 🦩
지금은 score의 길이가 최대 1,000까지이므로 점수 목록을 일일이 정렬하며 해결할 수 있다.
하지만 score의 길이가 커진다면? score 길이를 N으로 둔다면 현재는 O(N) * O(NlogN) 풀이이므로 1,000까진 괜찮다. 하지만 조금만 커진다면 분명 시간초과가 걸릴 것이다.
우선순위 큐를 이용하면 O(N) * O(logN) 풀이로도 이 문제는 해결할 수 있다. 하지만 JS에서 우선순위 큐를 일일이 구현하기 빡세서 손이 가지 않는다...
아마 score 길이를 늘려놓은 버전이 명예의 전당 (2)이지 않을까?
*/
