function solution(wallpaper) {
  var answer = [];

  // 초기값 선언
  let lux = wallpaper.length;
  let luy = wallpaper[0].length;
  let rdx = -1;
  let rdy = -1;

  // 바탕화면 정보를 돌며 기록
  for (let x = 0; x < wallpaper.length; x++) {
    const row = wallpaper[x];

    // 한 줄에서 가장 왼쪽 파일과 오른쪽 파일 정보 기록
    let minY = row.length;
    let maxY = -1;
    for (let y = 0; y < row.length; y++) {
      if (row[y] === '.') continue;
      if (minY === row.length) minY = y;
      maxY = y;
    }
    luy = Math.min(luy, minY);
    rdy = Math.max(rdy, maxY);

    // 줄에 파일이 있는 경우 x 정보 확인
    if (minY === row.length) continue;
    if (lux === wallpaper.length) lux = x;
    rdx = x;
  }

  answer.push(lux);
  answer.push(luy);
  answer.push(rdx + 1);
  answer.push(rdy + 1);

  return answer;
}
