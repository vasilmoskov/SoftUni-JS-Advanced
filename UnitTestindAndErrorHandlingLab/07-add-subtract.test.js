let createCalculator = require('./07-add-subtract');
let {assert, expect} = require('chai');

describe('Test Calculator', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('should has all methods', () => {
        assert.containsAllKeys(calculator, 'add');
        assert.containsAllKeys(calculator, 'subtract');
        assert.containsAllKeys(calculator, 'get');
        // expect(calculator).to.haveOwnProperty('add');
        // expect(calculator).to.haveOwnProperty('subtract');
        // expect(calculator).to.haveOwnProperty('get');
    });

    it('adds single number', () => {
        calculator.add(1);
        assert.equal(calculator.get(), 1);
    });

    it('adds multiple numbers', () => {
        calculator.add(1);
        calculator.add(2);
        assert.equal(calculator.get(), 3);
    });

    it('adds decimal numbers', () => {
        calculator.add(1.1);
        calculator.add(2.2);
        assert.closeTo(calculator.get(), 3.3, 0.1);
    });

    it('adds decimal string numbers', () => {
        calculator.add('1.1');
        calculator.add('2.2');
        assert.closeTo(calculator.get(), 3.3, 0.1);
    });

    it('adds negative numbers', () => {
        calculator.add(-1.1);
        calculator.add(-2.2);
        assert.closeTo(calculator.get(), -3.3, 0.1);
    });

    it('subtracts single number', () => {
        calculator.subtract(1);
        assert.equal(calculator.get(), -1);
    });

    it('subtracts multiple numbers', () => {
        calculator.subtract(1);
        calculator.subtract(2);
        assert.equal(calculator.get(), -3);
    });

    it('subtracts decimal numbers', () => {
        calculator.subtract(1.1);
        calculator.subtract(2.2);
        assert.closeTo(calculator.get(), -3.3, 0.1);
    });

    it('subtracts decimal string numbers', () => {
        calculator.subtract('1.1');
        calculator.subtract('2.2');
        assert.closeTo(calculator.get(), -3.3, 0.1);
    });

    it('subtracts negative numbers', () => {
        calculator.subtract(-1.1);
        calculator.subtract(-2.2);
        assert.closeTo(calculator.get(), 3.3, 0.1);
    });

    it('adds and subtracts', () => {
        calculator.add(1);
        calculator.subtract(2);
        assert.equal(calculator.get(), -1);
    });

    it('should return NaN when invalid argument is passed', () => {
        calculator.add(undefined);
        assert.isNaN(calculator.get());
        calculator.add(null);
        assert.isNaN(calculator.get());
        calculator.add('string');
        assert.isNaN(calculator.get());
        calculator.subtract(undefined);
        assert.isNaN(calculator.get());
        calculator.subtract(null);
        assert.isNaN(calculator.get());
        calculator.subtract('string');
        assert.isNaN(calculator.get());

    });
})