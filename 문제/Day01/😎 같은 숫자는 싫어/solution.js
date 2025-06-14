function solution(arr) {
  var answer = [];

  // arr 안의 값 확인
  for (let number of arr) {
    if (answer.length !== 0 && answer[answer.length - 1] === number) continue;
    answer.push(number);
  }

  return answer;
}
