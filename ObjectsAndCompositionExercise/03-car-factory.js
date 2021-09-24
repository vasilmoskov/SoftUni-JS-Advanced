function createCar(inputCar) {

    let power;
    let volume;


    if (inputCar.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (inputCar.power <= 120) {
        power = 120;
        volume = 2400;
    } else if (inputCar.power <= 200) {
        power = 200;
        volume = 3500;
    }

    let type;
    
    if(inputCar.carriage == 'hatchback' || inputCar.carriage == 'coupe' ) {
        type = inputCar.carriage;
    }


    let color = inputCar.color;

    if (inputCar.wheelsize % 2 == 0) {
        inputCar.wheelsize -= 1;
    }

    let wheels = [1,2,3,4];
    wheels.fill(inputCar.wheelsize, 0);

    const car = { 
        model: inputCar.model,
        engine: {
            power,
            volume
        },
        carriage: {
            type,
            color
        },
        wheels: wheels
    }

    return car;
}

// console.log(createCar({
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// ));

console.log(createCar({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));