function getNewArr(arr) {
    let newArr = [];
    
    if(arr.length > 0) {
        newArr.push(arr[0]);
    }

    for(let i = 1; i < arr.length; i++) {
        if (newArr[newArr.length - 1] <= arr[i]) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(getNewArr([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
console.log(getNewArr([1, 
2, 
3,
4]
));
console.log(getNewArr([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));