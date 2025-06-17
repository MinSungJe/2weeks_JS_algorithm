function solution(a, b, n) {
  var answer = 0;

  // 콜라를 최대한 바꿔먹기
  while (n >= a) {
    // 콜라 개수 계산
    const leftCoke = n % a;
    const newCoke = ((n - leftCoke) / a) * b;

    answer += newCoke;
    n = leftCoke + newCoke;
  }

  return answer;
}
