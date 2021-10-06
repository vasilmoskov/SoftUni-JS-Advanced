function solve(arr, startIndex, endIndex) {

    if (Array.isArray(arr) === false) {
        return NaN;
    }

    let sum = 0;

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= arr.length) {
        endIndex = arr.length - 1;
    }

    for (let index = startIndex; index <= endIndex; index++) {

        if (typeof arr[index] != 'number') {
            return NaN;
        }

        sum += Number(arr[index]);
    }

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve('text', 0, 2));
