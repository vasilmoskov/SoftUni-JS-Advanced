function solve(...args) {

    let occurances = {};

    for (const arg of args) {
        let type = typeof arg;

        console.log(`${type}: ${arg}`)

        if (occurances[type]) {
            occurances[type] = ++occurances[type];
        } else {
            occurances[type] = 1;
        }
    }

    Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a]) //by value desc 
        .forEach(key => console.log(`${key} = ${occurances[key]}`));
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve('cat', 42, 41, function () { console.log('Hello world!'); });