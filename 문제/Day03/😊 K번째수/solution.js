function solution(array, commands) {
  var answer = [];

  // 명령별로 수행
  for (const command of commands) {
    const [i, j, k] = command;
    const slicedArray = array.slice(i - 1, j);
    slicedArray.sort((a, b) => a - b);
    answer.push(slicedArray[k - 1]);
  }

  return answer;
}
