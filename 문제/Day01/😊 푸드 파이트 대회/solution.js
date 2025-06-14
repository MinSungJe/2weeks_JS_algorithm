function solution(food) {
  var answer = '';

  // 개수 배열 선언
  const counts = food.slice(1).map((count) => (count - (count % 2)) / 2);

  // 음식 놓기
  for (let i = 1; i < food.length; i++) {
    answer += i.toString().repeat(counts[i - 1]);
  }
  answer += '0';
  for (let i = food.length - 1; i > 0; i--) {
    answer += i.toString().repeat(counts[i - 1]);
  }

  return answer;
}
