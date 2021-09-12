function solution (arr) {
    arr.sort((a, b) => a-b);

    let deleteCount = arr.length / 2;

    arr.splice(0, deleteCount);

    return arr;
}

console.log(solution([4, 7, 2, 5]));
console.log(solution([3, 19, 14, 7, 2, 19, 6]));