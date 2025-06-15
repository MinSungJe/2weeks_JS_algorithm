function solution(seoul) {
  var answer = '';

  // 반복문 돌며 확인
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') answer = `김서방은 ${i}에 있다`;
  }

  return answer;
}
