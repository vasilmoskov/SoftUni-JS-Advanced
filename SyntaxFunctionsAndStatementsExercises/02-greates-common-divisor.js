function solution(num1, num2) {
    let gcd = 1;

    let smallerNum = Math.min(num1, num2);

    for (let i = 2; i <= smallerNum; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);
}

solution(15, 5);
solution(2154, 458);