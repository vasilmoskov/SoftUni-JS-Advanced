function solution(num) {
    let numAsStr = '' + num;

    let sum = 0;
    let digit = numAsStr.charAt(0);
    let equal = true;

    for (let i = 0; i < numAsStr.length; i++) {
        sum += Number(numAsStr.charAt(i));

        if(numAsStr.charAt(i) != digit) {
            equal = false;
        }
    }

    console.log(equal);
    console.log(sum);
}

solution(2222222);
solution(1234);