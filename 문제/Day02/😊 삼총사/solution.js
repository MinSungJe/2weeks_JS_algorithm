function solution(number) {
  var answer = 0;

  // 삼총사 지정
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        // 합쳐서 0인지 확인
        if (number[i] + number[j] + number[k] === 0) answer += 1;
      }
    }
  }

  return answer;
}

/* 🦩
지금은 삼총사가 될 수 있는 최대 길이(i, j, k)가 13까지라 O(13^3)로 괜찮지만,
만약 최대 길이가 1,000인 경우는 어떻게 문제를 해결할 수 있을까요?
궁금하시면 투 포인터 알고리즘을 찾아보세요!
관련 백준 문제 풀이: https://minsungje.notion.site/2473-a45f9eed9b1b4efd97e0f71573a39634
*/
