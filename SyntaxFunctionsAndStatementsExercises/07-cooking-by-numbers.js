function solution(num, op1, op2, op3, op4, op5) {

    num = applyOperation(num, op1);
    console.log(num);

    num = applyOperation(num, op2);
    console.log(num);

    num = applyOperation(num, op3);
    console.log(num);

    num = applyOperation(num, op4);
    console.log(num);

    num = applyOperation(num, op5);
    console.log(num);

    function applyOperation(num, op) {
        switch (op) {
            case 'chop':
                return num / 2;
            case 'dice':
                return Math.sqrt(num);
            case 'spice':
                return num + 1;
            case 'bake':
                return num * 3;
            case 'fillet':
                return num * 0.8;
        }
    }
}

solution('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solution('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// solution();
// solution();