function solution(N, stages) {
  var answer = [];

  // 현재 상황을 기록하는 배열 생성
  const status = new Array(N + 2).fill(0);
  for (let stage of stages) status[stage] += 1;

  // 도전자 수 배열(누적합) 생성
  const challengerCounts = new Array(status.length).fill(0);
  challengerCounts[status.length - 1] = status[status.length - 1];
  for (let i = status.length - 2; i >= 0; i--)
    challengerCounts[i] = challengerCounts[i + 1] + status[i];

  // 실패율 기록
  const failRates = [];
  for (let i = 1; i <= N; i++) failRates.push({ index: i, rate: status[i] / challengerCounts[i] });

  // 정렬 후 결과 기록
  failRates.sort((a, b) => b.rate - a.rate);
  answer = failRates.map(({ index }) => index);

  return answer;
}
