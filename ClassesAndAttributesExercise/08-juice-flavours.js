function solve(arr) {
    let juices = new Map();

    let juicesBottles = new Map();


    for (const pair of arr) {
        let [juiceName, juiceQuantity] = pair.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (!juices.has(juiceName)) {
            juices.set(juiceName, 0);
        }



        juiceQuantity += juices.get(juiceName);

        if (juiceQuantity >= 1000) {
            let bottles = Math.trunc(juiceQuantity / 1000);

            if (!juicesBottles.has(juiceName)) {
                juicesBottles.set(juiceName, 0);
            }

            juicesBottles.set(juiceName, juicesBottles.get(juiceName) + bottles);
            juiceQuantity %= 1000;
        }

        juices.set(juiceName, juices.get(juiceName) + juiceQuantity);
    }

    for (let [key, value] of juicesBottles) {
        if (value > 0) {
            console.log(`${key} => ${value}`)
        }
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);