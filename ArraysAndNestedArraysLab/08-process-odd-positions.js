function solution(arr) {
    return output = arr
        .filter((a, i) => i % 2 !== 0)
        .map(e => e * 2)
        .reverse()
        .join(' ');
}

console.log(solution([3, 0, 10, 4, 7, 3]));