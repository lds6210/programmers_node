// const nums = [3, 3, 3, 2, 2, 4];

// const dupArr = [1, 2, 3, 1, 2];

// const set = new Set(nums);

// const uniqueArr = [...set];

// //console.log(Array.isArray(uniqueArr));
// console.log(uniqueArr);

// console.log(solution(nums));

// function solution(nums) {
//   var answer = 0;
//   var set = new Set(nums);
//   var uniqueArr = [...set];
//   answer = uniqueArr.length;
//   var cnt = nums.length / 2;
//   if (cnt < answer) {
//     answer = cnt;
//   }
//   return answer;
// }

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
