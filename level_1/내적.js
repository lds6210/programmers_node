const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];

console.log(solution(a, b));

function solution(a, b) {
  var answer = 0;
  for (var i = 0; i < b.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
