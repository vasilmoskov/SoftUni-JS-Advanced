function solution(x1, y1, x2, y2) {
    console.log((x1 == 0 || y1 == 0)
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);

    console.log((x2 == 0 || y2 == 0)
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);

    console.log((x1 == x2 || y1 == y2 || x1 == y2 || x2 == y1)
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

solution(3, 0, 0, 4);
solution(2, 1, 1, 1);