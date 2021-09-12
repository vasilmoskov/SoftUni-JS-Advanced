function solution (n, k) {
    let arr = [];
    arr[0] = 1;

    for (let i = 1; i < n; i++) {

        let numToBeAdded = 0;

        for (let j = i - k; j < i; j++) {
            if (arr[j] >= 0) {
                numToBeAdded += arr[j];
            }
        }

        arr [i] = numToBeAdded;
    }

    console.log(arr);
}

solution(6, 3);
solution(8, 2);