// string.split(splitter, limit);

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];
  commands.map((command) => {
    const [start, end, k] = command;
    const result = array
      .slice(start - 1, end)
      .sort((a, b) => a - b)
      .slice(k - 1, k);
    answer.push(result[0]);
  });
  return answer;
}

solution(array, commands);
