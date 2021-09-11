function solution(input) {
    let typeOfInput = typeof input;

    if (typeOfInput === "number") {
        let area = Math.PI * Math.pow(input, 2);
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
    }
}

solution(5);
solution('name');