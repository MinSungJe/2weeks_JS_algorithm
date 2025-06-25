function solution(k, m, score) {
  var answer = 0;

  // 점수 정렬
  score.sort((a, b) => a - b);

  // 사과 박스 나누기
  while (true) {
    // 종료
    if (score.length < m) break;

    // 사과박스 나누기
    const box = [];
    for (let i = 0; i < m; i++) box.push(score.pop());

    // 사과박스 이익 더하기
    answer += Math.min(...box) * m;
  }

  return answer;
}

/* 🦩
사과박스의 가치는 박스 안 사과 중 가장 낮은 사과에 의해 결정된다.
따라서 가치가 낮은 사과는 가치가 낮은 사과끼리 묶어야 가장 높은 가치합의 박스를 얻을 수 있다.
*/
