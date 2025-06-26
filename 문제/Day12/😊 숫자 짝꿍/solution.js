function solution(X, Y) {
  var answer = '';

  // Map 선언
  const numberMapX = new Map();
  const numberMapY = new Map();
  for (let i = 0; i < 10; i++) {
    numberMapX.set(String(i), 0);
    numberMapY.set(String(i), 0);
  }

  // Map에 기록
  for (let letter of X) numberMapX.set(letter, numberMapX.get(letter) + 1);
  for (let letter of Y) numberMapY.set(letter, numberMapY.get(letter) + 1);

  // answer에 기록
  for (let i = 10; i >= 0; i--) {
    const count = Math.min(numberMapX.get(String(i)), numberMapY.get(String(i)));
    for (let j = 0; j < count; j++) answer += String(i);
  }

  // answer가 ""라면, "-1"로 바꿈
  if (answer === '') answer = '-1';

  // answer가 0이라면, "0"으로 바꿈
  if (Number(answer) === 0) answer = '0';

  return answer;
}
