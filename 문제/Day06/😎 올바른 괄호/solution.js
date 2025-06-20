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
