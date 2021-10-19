let numberOperations = require('./03-number-operations');
const { assert } = require('chai');

describe("Test class", function () {

    describe("Test powNumber", function () {
        it("should return powed number when a number is passed", function () {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(-2), 4);
            assert.equal(numberOperations.powNumber(-1), 1);
            assert.equal(numberOperations.powNumber(0), 0);
        });

        it("should return powed number when a string number is passed", function () {
            assert.equal(numberOperations.powNumber('2'), 4);
            assert.equal(numberOperations.powNumber('-2'), 4);
            assert.equal(numberOperations.powNumber('-1'), 1);
            assert.equal(numberOperations.powNumber('0'), 0);
        });

        it("should return powed number when a decimal number is passed", function () {
            assert.closeTo(numberOperations.powNumber(1.2), 1.44, 0.01);
        });

        it("should return 0 when null value is passed", function () {
            assert.equal(numberOperations.powNumber(null), 0);
            assert.equal(numberOperations.powNumber([]), 0);
            assert.equal(numberOperations.powNumber(''), 0);

        });

        it("should return NaN when invalid argument is passed", function () {
            assert.isNaN(numberOperations.powNumber(undefined));
            assert.isNaN(numberOperations.powNumber({}));
            assert.isNaN(numberOperations.powNumber());

        });
    });

    describe('test numberChecker', () => {
        it('should throw when passed argument is NaN', () => {
            assert.throw(() => numberOperations.numberChecker(undefined));
            assert.throw(() => numberOperations.numberChecker({}));
            assert.throw(() => numberOperations.numberChecker());
        })

        it('should return that number is less than 100', () => {
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(1), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(1.2), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(-1), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(''), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker('0'), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker([]), 'The number is lower than 100!')
            assert.equal(numberOperations.numberChecker(null), 'The number is lower than 100!')
        })

        it('should return that number is greater than 100', () => {
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
            assert.equal(numberOperations.numberChecker(200), 'The number is greater or equal to 100!')
        })
    })

    describe('test sumArrays', () => {
        it('should return sum of two equal arrays', () => {
            let actual = JSON.stringify(numberOperations.sumArrays([1, 2], [3, 4]));
            let expected = JSON.stringify([4, 6]);
            assert.equal(actual, expected);
        })

        it('should return sum of non-equal arrays when second array is longer', () => {
            let actual = JSON.stringify(numberOperations.sumArrays([1, 2], [3, 4, 5]));
            let expected = JSON.stringify([4, 6 ,5]);
            assert.equal(actual, expected);
        })

        it('should return sum of non-equal arrays when first array is longer', () => {
            let actual = JSON.stringify(numberOperations.sumArrays([1, 2, 3], [3, 4]));
            let expected = JSON.stringify([4, 6 ,3]);
            assert.equal(actual, expected);
        })

        it('should return concatanete arguments when they are not numbers', () => {
            let actual = JSON.stringify(numberOperations.sumArrays(['1'], ['2']));
            let expected = JSON.stringify(['12']);
            assert.equal(actual, expected);
        })

        it('should return an empty array when such arrays are passed', () => {
            let actual = JSON.stringify(numberOperations.sumArrays([], []));
            let expected = JSON.stringify([]);
            assert.equal(actual, expected);
        })

        it('should throw when invalid argument is passed', () => {
            assert.throw(() => numberOperations.sumArrays(undefined, []));
            assert.throw(() => numberOperations.sumArrays(null, []));
        })

    })
});
