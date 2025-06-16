function solution(n) {
  var answer = '';

  // 번갈아가며 문자 추가
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) answer += '수';
    else answer += '박';
  }

  return answer;
}
