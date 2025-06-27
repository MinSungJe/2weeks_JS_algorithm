function solution(s, skip, index) {
  // skip을 배열로 가공
  const skipCodeList = [...skip].map((letter) => letter.charCodeAt());

  // 글자를 바꾸는 함수
  function changeLetter(letter) {
    let idx = 0;

    // 아스키 코드로 관리
    let charCode = letter.charCodeAt();
    while (idx < index) {
      charCode = (((charCode + 1) % 97) % 26) + 97;

      // skip에 있는 경우 다시 재계산
      if (skipCodeList.includes(charCode)) continue;

      // 없는 경우 idx 증가
      idx += 1;
    }

    return String.fromCharCode(charCode);
  }

  // 함수 호출
  var answer = [...s].reduce((acc, letter) => acc + changeLetter(letter), '');

  return answer;
}
