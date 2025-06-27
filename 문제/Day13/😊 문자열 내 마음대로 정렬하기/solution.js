function solution(strings, n) {
  var answer = [];

  // 문자열 정렬
  strings.sort().sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
  answer = [...strings];

  return answer;
}
