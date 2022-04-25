const absolutes = [4, 7, 12];
const signs = [true, false, true];

console.log(solution(absolutes, signs));

function solution(absolutes, signs) {
  var answer = 0;
  for (i in absolutes) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}
