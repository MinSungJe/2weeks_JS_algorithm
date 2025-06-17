// 약수의 개수를 구하는 함수
function getAttackValue(number) {
  let answer = 0;

  for (let i = 1; i <= number ** (1 / 2); i++) {
    if (number % i === 0) {
      if (i * i === number) answer += 1;
      else answer += 2;
    }
  }
  return answer;
}

function solution(number, limit, power) {
  var answer = 0;

  // 기사단원 별로 공격력 구하기
  const attackValues = [];
  for (let i = 1; i <= number; i++) {
    // 약수의 개수 구하기
    const attackValue = getAttackValue(i);

    // 약수의 개수가 제한 수치를 넘는 경우 고려
    if (attackValue > limit) attackValues.push(power);
    else attackValues.push(attackValue);
  }

  // 공격력의 합 구하기
  answer = attackValues.reduce((acc, attackValue) => acc + attackValue, 0);

  return answer;
}
