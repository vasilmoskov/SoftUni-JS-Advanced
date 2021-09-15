function solution(type, weight, price) {
    let kg = weight / 1000
    let moneyNeeded = kg * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${type}.`)
}

solution('orange', 2500, 1.80);