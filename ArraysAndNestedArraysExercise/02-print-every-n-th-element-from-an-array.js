function getNewArr(arr, step) {
    let newArr = [];

    let indexNewArr = 0;

    for (let i = 0; i < arr.length; i+=step) {
        newArr[indexNewArr++] = arr[i];
    }

    return newArr;
}

// console.log(getNewArr(['5', 
// '20', 
// '31', 
// '4', 
// '20'], 
// 2
// ));

// console.log(getNewArr(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// ));

console.log(getNewArr(['1', 
'2',
'3', 
'4', 
'5'], 
6
));