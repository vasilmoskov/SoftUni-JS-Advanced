class Stringer {
    constructor(innerString, innerLength) {
        this._innerString = innerString;
        this._innerLength = innerLength;
    }

    increase(length) {
        this._innerLength += length;
    }

    decrease(length) {
        this._innerLength -= length;

        if(this._innerLength  < 0) {
            this._innerLength  = 0;
        }
    }

    toString() {
        if(this._innerString.length > this._innerLength) {
            let dif = this._innerString.length - this._innerLength;
            return (this._innerString.slice(0, this._innerString.length - dif)).concat('...');
        } else if (this._innerString.length  == 0) {
            return this._innerString.concat('...');
        }

        return this._innerString;

    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
