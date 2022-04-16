const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k));

function solution(id_list, report, k) {
  console.log("id_list : " + id_list);
  console.log("report : " + report);
  console.log("k : " + k);

  //Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있습니다.
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  console.log(reports);

  //Map객체는 키-값 쌍을 보유하고 키의 원래 삽입 순서를 기억합니다 .
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  console.log(counts);

  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  console.log(good);

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
