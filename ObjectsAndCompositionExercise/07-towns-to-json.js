function solution(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let tokens = arr[i].split(/\s*\|+\s*/g);

        let town = {
            Town: tokens[1],
            Latitude: Number(Number(tokens[2]).toFixed(2)),
            Longitude: Number(Number(tokens[3]).toFixed(2)),
        }

        result.push(town);
    }

    console.log(JSON.stringify(result));
}

solution(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);