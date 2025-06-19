function solution(cards1, cards2, goal) {
  var answer = 'Yes';

  // goal의 모든 내용이 없어질 때까지 확인
  while (goal.length > 0) {
    const target = goal.shift();

    // cards1의 맨 위에 있는지 확인
    if (target === cards1[0]) {
      cards1.shift();
      continue;
    }

    // cards2의 맨 위에 있는지 확인
    if (target === cards2[0]) {
      cards2.shift();
      continue;
    }

    // 둘 다 없을 경우 No로 바꾸고 반복문 종료
    answer = 'No';
    break;
  }

  return answer;
}

/* 🦩
현재는 카드의 범위가 그렇게 크지 않아 shift를 사용해도 문제없다. O(goal길이 * cards1길이 * cards2길이)
하지만 범위가 커진다면, O(goal길이)로 해결할 수 있는 방법을 찾아야 한다.
아마 마지막으로 사용한 index를 저장하는 방식으로 해결하면 될 듯?
*/
