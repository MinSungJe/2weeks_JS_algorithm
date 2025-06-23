function solution(nums) {
  var answer = 0;

  // Set 자료구조 선언
  const pokeType = new Set(nums);

  // 종류의 개수와 골라야 하는 폰켓몬 수 비교
  answer = Math.min(pokeType.size, nums.length / 2);

  return answer;
}

/* 🦩
종류를 구할 땐, 집합 자료구조를 이용하면 편하다.
*/