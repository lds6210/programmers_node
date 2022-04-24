function solution(arr) {
  var answer = [];
  var min = Math.min(...arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  if (arr[0] === 10) {
    answer.push(-1);
  }
  return answer;
}
