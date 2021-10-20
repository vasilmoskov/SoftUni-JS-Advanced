const testNumbers = require("./03-test-numbers");
const { assert } = require('chai');


describe("Test numbers", function () {
    describe("sum numbers", function () {
        it("should return undefined when passed argument is not a function", function () {
            assert.isUndefined(testNumbers.sumNumbers(1, undefined));
            assert.isUndefined(testNumbers.sumNumbers(1, null));
            assert.isUndefined(testNumbers.sumNumbers(1, 'asd'));
            assert.isUndefined(testNumbers.sumNumbers(1, []));
            assert.isUndefined(testNumbers.sumNumbers(1, {}));
            assert.isUndefined(testNumbers.sumNumbers(undefined, 1));
            assert.isUndefined(testNumbers.sumNumbers(null, 1));
            assert.isUndefined(testNumbers.sumNumbers('asd', 1));
            assert.isUndefined(testNumbers.sumNumbers([], 1));
            assert.isUndefined(testNumbers.sumNumbers({}, 1));
            assert.isUndefined(testNumbers.sumNumbers('1', 1));
            assert.isUndefined(testNumbers.sumNumbers(1, '1'));
        });

        it('should return correct sum of the arguments', () => {
            assert.equal(testNumbers.sumNumbers(0, 1), '1.00');
            assert.equal(testNumbers.sumNumbers(-2, 0), '-2.00');
            assert.equal(testNumbers.sumNumbers(-2, 4), '2.00');
            assert.equal(testNumbers.sumNumbers(1.22, 2.33), '3.55');
        })
    });

    describe('test number checker', () => {
        it('should throw an error when argument is not a number', () => {
            assert.throw(() => testNumbers.numberChecker({}), 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker(undefined), 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker('str'), 'The input is not a number!');
        });

        it('should assert an empty string, empty array, false and null value to be equal to 0 and therefore to even numbers', () => {
            assert.equal(testNumbers.numberChecker([]), 'The number is even!');
            assert.equal(testNumbers.numberChecker(null), 'The number is even!');
            assert.equal(testNumbers.numberChecker(''), 'The number is even!');
            assert.equal(testNumbers.numberChecker(false), 'The number is even!');
        });

        it('should assert true to be equal to 1 and therefore to odd number', () => {
            assert.equal(testNumbers.numberChecker(true), 'The number is odd!');
        })

        it('should assert that odd numbers are such', () => {
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-1), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(3), 'The number is odd!');
        })

        it('should assert that even numbers are such', () => {
            assert.equal(testNumbers.numberChecker(2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(-2), 'The number is even!');
            assert.equal(testNumbers.numberChecker(4), 'The number is even!');
        })

        it('should assert that 0 is even', () => {
            assert.equal(testNumbers.numberChecker(0), 'The number is even!');
        })
    })

    describe('test averageSumArray', () => {
        it('should return correct result when integer numbers are passed', () => {
            assert.equal(testNumbers.averageSumArray([1, 3]), 2);
            assert.equal(testNumbers.averageSumArray([3]), 3);
            assert.equal(testNumbers.averageSumArray([-1, 3]), 1);
            assert.equal(testNumbers.averageSumArray([-1, -3, -2]), -2);
        })

        it('should return correct result when floating point numbers are passed', () => {
            assert.closeTo(testNumbers.averageSumArray([4.22, 2.22]), 3.22, 0.01);
            assert.closeTo(testNumbers.averageSumArray([-4.66, 2.22]), -1.22, 0.01);
        })

        it('should return NaN when empty arr or equivalent is passed', () => {
            assert.isNaN(testNumbers.averageSumArray([]));
            assert.isNaN(testNumbers.averageSumArray({}));
            assert.isNaN(testNumbers.averageSumArray(0));
            assert.isNaN(testNumbers.averageSumArray('asd'));
        })

        it('should return average of concatenated string numbers', () => {
            assert.closeTo(testNumbers.averageSumArray(['1', '3']), 6.5, 0.01);
        })

        it('should throw when invalid argument is passed', () => {
            assert.throw(() => testNumbers.averageSumArray(null));
            assert.throw(() => testNumbers.averageSumArray(undefined));
        })
    })
});
