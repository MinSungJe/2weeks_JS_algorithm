// 단어가 옹알이로 이루어져 있는지 확인하는 함수
function isOngAl(word) {
  // 초기값 선언
  let answer = true;
  const canSpeak = ['aya', 'ye', 'woo', 'ma'];
  let idx = 0;
  let prevSpeak = '';

  // 단어를 탐색하며 옹알이로 이루어져 있는지 확인
  while (idx < word.length) {
    // 두 글자 옹알이
    if (idx + 2 <= word.length) {
      const target = word.slice(idx, idx + 2);

      // 이전과 같은 발음
      if (target === prevSpeak) {
        answer = false;
        break;
      }

      // 가능한 발음일 경우 기록
      if (canSpeak.includes(target)) {
        idx += 2;
        prevSpeak = target;
        continue;
      }
    }

    // 세 글자 옹알이
    if (idx + 3 <= word.length) {
      const target = word.slice(idx, idx + 3);

      // 이전과 같은 발음
      if (target === prevSpeak) {
        answer = false;
        break;
      }

      // 가능한 발음일 경우 기록
      if (canSpeak.includes(target)) {
        idx += 3;
        prevSpeak = target;
        continue;
      }
    }

    // 옹알이랑 맞는 경우가 없음
    answer = false;
    break;
  }

  return answer;
}

function solution(babbling) {
  // 함수 호출
  var answer = babbling.reduce((acc, word) => acc + (isOngAl(word) ? 1 : 0), 0);
  return answer;
}

/* 🦩
두 글자 옹알이와 세 글자 옹알이가 다행이게도 겹치는 경우가 없다. (aye, ye 같은 경우)
만약 두 글자 옹알이가 세 글자 옹알이의 일부인 경우가 있었다면 앞에서부터 DFS를 돌려 완전 탐색을 하여 문제를 풀어야 할 듯..?
겹치는 경우가 없으므로 그냥 앞에서부터 옹알이인지 아닌지 확인하면 된다.
*/
