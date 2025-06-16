function solution(n) {
  var answer = 0;

  // 에라토스테네스의 체
  const length = 1000001;
  const sosu = new Array(length).fill(1);
  sosu[0] = 0;
  sosu[1] = 0;
  for (let i = 2; i < length; i++) {
    if (sosu[i] === 0) continue;
    for (let j = 2 * i; j < length; j += i) {
      sosu[j] = 0;
    }
  }

  // 소수 개수 확인
  for (let i = 1; i < n + 1; i++) {
    if (sosu[i] === 1) answer += 1;
  }
  return answer;
}
