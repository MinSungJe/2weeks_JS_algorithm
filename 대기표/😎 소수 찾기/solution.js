function solution(numbers) {
  var answer = 0;

  // 소수 배열 구하기
  const length = 10000000;
  const isSosu = new Array(length).fill(true);
  isSosu[0] = false;
  isSosu[1] = false;
  for (let i = 2; i < length; i++) {
    if (!isSosu[i]) continue;
    isSosu[i] = true;
    for (let j = 2 * i; j < length; j += i) isSosu[j] = false;
  }

  // 초기값 선언
  const L = numbers.length;
  const visited = new Array(L).fill(false);
  const numberResult = new Array(length).fill(false);

  // DFS
  function DFS(numberString) {
    let number = 0;
    if (numberString !== '') number = Number(numberString);
    if (isSosu[number]) numberResult[number] = true;

    // 다음 탐색
    for (let i = 0; i < L; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      DFS(numberString + numbers.slice(i, i + 1));
      visited[i] = false; // 백트래킹
    }
  }

  // 함수 호출 및 결과 도출
  DFS('');
  for (let i = 0; i < length; i++) {
    if (numberResult[i]) answer += 1;
  }

  return answer;
}
