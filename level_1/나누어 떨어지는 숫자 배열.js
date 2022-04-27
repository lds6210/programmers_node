const arr = [2, 36, 1, 3];
const divisor = 1;

console.log(solution(arr, divisor));
function solution(arr, divisor) {
  var answer = [];
  arr.map(function (item) {
    if (item % divisor === 0) {
      answer.push(item);
    }
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer.sort((a, b) => a - b);
}
