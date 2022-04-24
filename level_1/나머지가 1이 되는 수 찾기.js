const n = 12;

console.log(solution(n));

function solution(n) {
  var answer = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
}
