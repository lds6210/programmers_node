numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));

function solution(numbers) {
  var answer = 45;
  numbers.map(function (number) {
    answer -= number;
  });
  return answer;
}
