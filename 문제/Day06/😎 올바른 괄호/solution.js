function solution(s) {
  var answer = true;

  // 스택 선언
  const stack = [];
  for (let letter of s) {
    // (인 경우 stack에 값 넣기
    if (letter === '(') stack.push(letter);
    // )인 경우 맞는 짝이 있는지 확인
    else {
      if (stack.length === 0) answer = false;
      else stack.pop();
    }
  }

  // 스택에 남은 괄호가 있는지 확인
  if (stack.length !== 0) answer = false;

  return answer;
}

/* 🦩
괄호가 짝이 맞지 않는 경우는 두 가지다.
- 앞에 남아 있는 "("가 없는데 ")"가 나온 경우
- 모든 ")"를 처리했는데 아직 "("이 남은 경우

첫 번째 경우는 스택을 이용해 확인할 수 있다. "("만 스택에 넣어두고 ")"이 나올때마다 "("를 빼주는 식! -> 뺄 수 없다면, 괄호의 짝이 맞지 않는다는 뜻이 된다.
두 번째 경우는 마지막에 스택에 "("이 남아있는지 점검해 확인할 수 있다.
*/
