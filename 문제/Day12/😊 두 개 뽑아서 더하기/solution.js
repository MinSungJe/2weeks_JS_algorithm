function solution(numbers) {
  var answer = [];

  // 두 수 뽑기
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      const value = numbers[i] + numbers[j];
      if (!answer.includes(value)) answer.push(value);
    }
  }

  // 정렬
  answer.sort((a, b) => a - b);

  return answer;
}
