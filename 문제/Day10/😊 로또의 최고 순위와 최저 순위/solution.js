// 당첨 순위 반환하는 함수
function getRank(correctCount) {
  if (correctCount >= 2) return 7 - correctCount;
  else return 6;
}

function solution(lottos, win_nums) {
  var answer = [];

  // 초기값 선언
  const unknownCount = lottos.reduce((acc, lotto) => acc + (lotto === 0 ? 1 : 0), 0);
  const winNumberSet = new Set(win_nums);

  // 겹치는 수 확인
  const correctCount = lottos.reduce((acc, lotto) => acc + (winNumberSet.has(lotto) ? 1 : 0), 0);

  // 최대: 겹치는 수에 모든 미확인 수가 당첨
  answer.push(getRank(correctCount + unknownCount));

  // 최소: 겹치는 수만 당첨
  answer.push(getRank(correctCount));

  return answer;
}
