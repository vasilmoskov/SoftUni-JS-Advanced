function solve(arr, sortOrder) {

    return sortOrder === 'asc'
        ? arr.sort((a, b) => a - b)
        : arr.sort((a, b) => b - a);

    // switch (sortOrder) {
    //     case 'asc':
    //         return arr.sort((a, b) => a - b);
    //     case 'desc':
    //         return arr.sort((a, b) => b - a);
    // }
}

// solve([14, 7, 17, 6, 8], 'asc');
console.log(solve([14, 7, 17, 6, 8], 'desc'));