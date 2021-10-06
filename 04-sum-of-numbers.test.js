const {expect, assert} = require('chai');
const sum = require('./04-sum-of-numbers');

describe("Test Sum", () => {
    it ("should return correct sum", () => {
        expect(sum([-1, 2])).to.equal(1);
        expect(sum([3, 5])).to.equal(8);
        expect(sum([-10, -5])).to.equal(-15);
    })
});

