const N = 5;
const stage = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stage));

function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr / reach]);
        console.log({i, curr, reach});
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
