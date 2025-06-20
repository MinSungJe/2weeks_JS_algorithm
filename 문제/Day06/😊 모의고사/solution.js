function solution(answers) {
  var answer = [];

  // 초기값 선언
  const length = 10000;
  const first = new Array(length).fill(0);
  const second = new Array(length).fill(0);
  const third = new Array(length).fill(0);

  // 채우기
  for (let i = 0; i < length; i++) {
    first[i] = [1, 2, 3, 4, 5][i % 5];
    second[i] = [2, 1, 2, 3, 2, 4, 2, 5][i % 8];
    third[i] = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5][i % 10];
  }

  // 채점 결과 초기값 선언
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  // 채점
  for (let i = 0; i < answers.length; i++) {
    targetAnswer = answers[i];
    if (targetAnswer === first[i]) count1 += 1;
    if (targetAnswer === second[i]) count2 += 1;
    if (targetAnswer === third[i]) count3 += 1;
  }

  // 최대값 구하기
  const maxCount = Math.max(count1, count2, count3);

  // 결과 도출
  if (count1 === maxCount) answer.push(1);
  if (count2 === maxCount) answer.push(2);
  if (count3 === maxCount) answer.push(3);

  return answer;
}
