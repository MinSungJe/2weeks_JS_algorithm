function solution(a, b) {
  var answer = '';

  // 초기값 선언
  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];

  // 지난 날 구하기
  let day = b;
  for (let i = 0; i < a; i++) day += days[i];

  // 지난 날을 7로 나눈 나머지를 이용해 요일 구하기
  answer = date[day % 7];

  return answer;
}
