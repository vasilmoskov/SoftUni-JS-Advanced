function getWorker(arr) {
    let result = [];

    for (let i = 0; i < arr.length - 1; i += 2) {
        let food = {};
        food.name = arr[i];
        food.calories = arr[i + 1];
        result.push(`${food.name}: ${food.calories}`);
    }

    console.log(`{ ${result.join(', ')} }`);

}

getWorker(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);