const mathEnforcer = require('./04-math-enforcer');
const { assert } = require('chai');

describe('Test MathEnforcer', () => {
    it('should have all methods', () => {
        assert.hasAnyKeys(mathEnforcer, 'addFive');
        assert.hasAnyKeys(mathEnforcer, 'subtractTen');
        assert.hasAnyKeys(mathEnforcer, 'sum');
    });

    it('should return undefined when parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.addFive('5'));
        assert.isUndefined(mathEnforcer.addFive(undefined));
        assert.isUndefined(mathEnforcer.addFive(null));
        assert.isUndefined(mathEnforcer.addFive([]));

        assert.isUndefined(mathEnforcer.subtractTen('5'));
        assert.isUndefined(mathEnforcer.subtractTen(undefined));
        assert.isUndefined(mathEnforcer.subtractTen(null));
        assert.isUndefined(mathEnforcer.subtractTen([]));

        assert.isUndefined(mathEnforcer.sum(5, '5'));
        assert.isUndefined(mathEnforcer.sum(5, undefined));
        assert.isUndefined(mathEnforcer.sum(5, null));
        assert.isUndefined(mathEnforcer.sum(5, []));

        assert.isUndefined(mathEnforcer.sum('5', 5));
        assert.isUndefined(mathEnforcer.sum(undefined, 5));
        assert.isUndefined(mathEnforcer.sum(null, 5));
        assert.isUndefined(mathEnforcer.sum([], 5));
        assert.isUndefined(mathEnforcer.sum(undefined, undefined));

    });

    it('should add 5 to passed number', () => {
        assert.equal(mathEnforcer.addFive(0), 5);
        assert.equal(mathEnforcer.addFive(5), 10);
        assert.equal(mathEnforcer.addFive(-1), 4);
        assert.closeTo(mathEnforcer.addFive(2.2), 7.21, 0.1);
        assert.closeTo(mathEnforcer.addFive(2.2 + 1.1), 8.3, 0.1);
    });

    it('should subtract 10 to passed number', () => {
        assert.equal(mathEnforcer.subtractTen(0), -10);
        assert.equal(mathEnforcer.subtractTen(5), -5);
        assert.equal(mathEnforcer.subtractTen(20), 10);
        assert.closeTo(mathEnforcer.subtractTen(10.2), 0.2, 0.1);
        assert.closeTo(mathEnforcer.subtractTen(10.2 + 1.1), 1.3, 0.1);
    });

    it('should sum two numbers', () => {
        assert.equal(mathEnforcer.sum(0, 1), 1);
        assert.equal(mathEnforcer.sum(5, -5), 0);
        assert.equal(mathEnforcer.sum(-4, 10), 6);
        assert.closeTo(mathEnforcer.sum(1.1, 2.2), 3.3, 0.1);
    });
})