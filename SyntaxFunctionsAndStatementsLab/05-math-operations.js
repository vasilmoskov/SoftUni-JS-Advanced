function solution(num1, num2, str) {
    let result;

    switch (str) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
        case "**":
            result = num1 ** num2;
            break;

    }

    console.log(result);
}

solution(3, 5.5, '*');
solution(5, 6, '+');
