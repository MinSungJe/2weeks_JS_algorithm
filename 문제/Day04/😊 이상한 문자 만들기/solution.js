// 이상한 단어를 만드는 함수
function getStrangeWord(word) {
  let answer = '';

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) answer += word[i].toUpperCase();
    else answer += word[i].toLowerCase();
  }

  return answer;
}

function solution(s) {
  // 함수 호출
  var answer = s.split(' ').map(getStrangeWord).join(' ');
  return answer;
}
