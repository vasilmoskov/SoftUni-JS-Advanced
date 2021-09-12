function solution (inputArr) {

    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currElem = inputArr[i];

        if (currElem < 0) {
            resultArr.unshift(currElem)
        } else {
            resultArr.push(currElem);
        }
    }

    resultArr.splice()

    for (const num of resultArr) {
        console.log(num);
    }
}

solution([7, -2, 8, 9]);
solution([3, -2, 0, -1]);