function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  console.log(minCount);

  let zeroCount = lottos.filter((v) => !v).length;
  console.log(zeroCount);
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
