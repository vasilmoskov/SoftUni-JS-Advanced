function solution (arr) {
    arr.sort((a, b) => a - b);

    console.log(arr[0] + ' ' + arr[1]);
}

solution([30, 15, 50, 5]);
solution([3, 0, 10, 4, 7, 3]);