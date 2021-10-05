function calculator() {

    let num1;
    let num2;
    let res;

    return {
        init: (selector1, selector2, resultSelector) => {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            res = document.querySelector(resultSelector);
        },
        add: () => {
            res.value = Number(num1.value) + Number(num2.value);
            num1.value = '';
            num2.value = '';
        },
        subtract: () => {
            res.value = Number(num1.value) - Number(num2.value);
            num1.value = '';
            num2.value = '';
        },
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
