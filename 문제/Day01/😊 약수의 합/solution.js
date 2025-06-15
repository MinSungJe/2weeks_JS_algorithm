function solution(n) {
  var answer = 0;

  // 약수인 경우 합하기
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }

  return answer;
}
