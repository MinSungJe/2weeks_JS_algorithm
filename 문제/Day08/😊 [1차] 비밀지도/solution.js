// 이진수 구하는 함수
function getTwo(number, length) {
  let answer = '';

  // 이진수 구하기
  while (number > 0) {
    const value = number % 2;
    answer = String(value) + answer;
    number = (number - value) / 2;
  }

  // 부족한 길이 채우기
  if (answer.length < length) answer = '0'.repeat(length - answer.length) + answer;

  return answer;
}

function solution(n, arr1, arr2) {
  var answer = [];

  // 지도 배열 만들기
  const Map = new Array(n).fill(null).map(() => new Array(n).fill(false));

  // 지도에 arr 정보 기록
  for (let arr of [arr1, arr2]) {
    for (let i = 0; i < n; i++) {
      const row = getTwo(arr[i], n);
      for (let j = 0; j < n; j++) {
        if (row[j] === '1') Map[i][j] = true;
      }
    }
  }

  // Map 정보를 실제 기댓값으로 변환
  for (let lineInfo of Map)
    answer.push(lineInfo.reduce((acc, info) => acc + (info ? '#' : ' '), ''));

  return answer;
}
