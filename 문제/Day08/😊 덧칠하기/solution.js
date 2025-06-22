function solution(n, m, section) {
  var answer = 0;

  // 초기값 선언
  let index = 0;
  let last_paint = -1;

  for (let tile = 1; tile <= n; tile++) {
    // 색칠이 되지 않은 영역 찾기
    if (index == section.length || section[index] != tile) continue;

    // 색칠하지 않거나, 가장 멀리 색칠된 부분이 tile에 닿지 않으면 색칠
    if (last_paint == -1 || last_paint + m <= tile) {
      answer += 1;
      last_paint = tile;
    }
    index += 1;
  }

  return answer;
}

/* 🦩
역시 그리디하게 접근할 수 있는 문제다!
"앞에서부터 보면서 색칠이 안 되어 있으면 거기서부터 칠하기 시작한다."
생각해보면, 이미 색칠되어 있는 곳부터 색칠을 시작할 이유가 없다. 쓸데없이 맨처음 색칠 영역을 버리는 셈..
*/
