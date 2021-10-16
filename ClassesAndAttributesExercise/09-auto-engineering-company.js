function solve(arr) {

    let carBrands = new Map();

    for (let curr of arr) {
        let [carBrand, carModel, producedCars] = curr.split(' | ');
        producedCars = Number(producedCars);

        if (!carBrands.has(carBrand)) {
            carBrands.set(carBrand, new Map());
        }

        let models = carBrands.get(carBrand);

        if (!models.has(carModel)) {
            models.set(carModel, 0);
        }

        models.set(carModel, models.get(carModel) + producedCars);
    }

    for (let [keyBrand, valueModels] of carBrands) {
        console.log(keyBrand);
        for (let [keyModels, valueProducedCars] of valueModels) {
            console.log(`###${keyModels} -> ${valueProducedCars}`);
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);