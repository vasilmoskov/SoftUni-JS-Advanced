class Hex {
    constructor(num) {
        this._value = num;
    }

    set value(value) {
        this._value = value;
    }

    toString() {
        return `0x${this._value.toString(16).toUpperCase()}`;
    }

    valueOf() {
        return this._value;
    }

    plus(number) {
        return new Hex(typeof number == 'number' ? this._value + number : this._value + number.valueOf());
    }

    minus(number) {
        return new Hex(typeof number == 'number' ? this._value - number : this._value - number.valueOf());
    }

    parse(string) {
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
// console.log(FF.valueOf() + 1);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));

