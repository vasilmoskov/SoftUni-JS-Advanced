function sum (arr) {
    let firstElement = Number(arr[0]);
    let lastElement = Number(arr[arr.length - 1]);

    return firstElement + lastElement;
}

console.log(sum(['20', '30', '40']));
console.log(sum(['5', '10']));