function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

let calculator = createCalculator();

console.log(calculator.add(null));
console.log(calculator.add(undefined));
console.log(calculator.add('string'));

module.exports = createCalculator;