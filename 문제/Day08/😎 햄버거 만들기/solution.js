function solution(ingredient) {
  var answer = 0;

  // 스택 선언
  const stack = [];

  for (let element of ingredient) {
    stack.push(element);

    // 길이값 미리 선언
    const L = stack.length;

    // 아직 햄버거를 만들 양이 모이지 않음
    if (L < 4) continue;

    // 햄버거 만들기
    if (stack[L - 1] === 1 && stack[L - 2] === 3 && stack[L - 3] === 2 && stack[L - 4] === 1) {
      answer += 1;
      for (let i = 0; i < 4; i++) stack.pop();
    }
  }

  return answer;
}
