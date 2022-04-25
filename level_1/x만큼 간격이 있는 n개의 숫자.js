const x = 2;
const n = 5;

console.log(solution(x, n));

function solution(x, n) {
  return [...Array(n).keys()].map((v) => (v + 1) * x);
}
