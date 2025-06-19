function solution(s) {
  var answer = [];

  // 기록용 Map 생성
  const letterMap = new Map();

  // 문자열을 돌며 기록 시작
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    // 처음 나온 문자
    if (!letterMap.has(letter)) {
      answer.push(-1);
      letterMap.set(letter, i);
      continue;
    }

    // 이전에 나온 문자
    answer.push(i - letterMap.get(letter));
    letterMap.set(letter, i);
  }

  return answer;
}
