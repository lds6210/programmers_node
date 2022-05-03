const p = ["mislav", "stanko", "mislav", "ana"];
const c = ["stanko", "ana", "mislav"];

const solution = (p, c) => {
  p.sort();
  c.sort();
  while (p.length) {
    console.log(p);
    let pp = p.pop();
    if (pp !== c.pop()) {
      return pp;
    }
  }
};

console.log(solution(p, c));
