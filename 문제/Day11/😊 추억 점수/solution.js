function solution(name, yearning, photo) {
  var answer = [];

  // 그리움 통합 Map 만들기
  const valueMap = new Map();
  for (let i = 0; i < name.length; i++) valueMap.set(name[i], yearning[i]);

  // 사진 순회하며 결과 확인
  for (let photoPeople of photo) {
    let value = 0;

    // 사진에 있는 사람 순회
    for (let person of photoPeople) {
      if (valueMap.has(person)) value += valueMap.get(person);
    }
    answer.push(value);
  }

  return answer;
}
