function solution(phone_book) {
  var answer = true;

  // 집합 생성
  const prefixes = new Set();

  // 전화번호 길이별로 정렬
  phone_book.sort((a, b) => a.length - b.length);

  // 접두어가 있는지 확인(O(20 * 1,000,000))
  for (let number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      // 접두어로 잘라낸 뒤 있는지 확인
      const prefix = number.slice(0, i);
      if (prefixes.has(prefix)) answer = false;
    }

    // 번호를 접두어 사전에 추가
    prefixes.add(number);
  }

  return answer;
}
