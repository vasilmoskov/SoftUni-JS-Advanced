const { expect } = require('chai');
const isSymmetric = require('./05-check-for-symmetry');

describe("Test Symmetry", () => {
    // it ("should return a sum of eight for passed arguments three and five", () => {
    //     expect(sum([3, 5])).to.equal(8);
    // })

    it('return true for symetryc array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('return true for symetryc array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('return false for asymetryc array', () => {
        expect(isSymmetric([1, 2, 3, 4])).to.be.false;
    })

    it('return false when a parameter is not of correct type', () => {
        expect(isSymmetric([1, '2', 2, 1])).to.be.false;
    })

    it('return false when argument is not an array', () => {
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric("hello")).to.be.false;
    })
});

// const {expect} = require('chai');
// const isSymmetric = require('./symmetry');

// describe("Symetry checker", () => {
//     // it ("do test", () => {
//     //     expect(sum(3, 5)).to.equal(8);
//     // })

//     it('return true for symetryc array', () => {
//         expect(isSymmetric([1,2,2,1])).to.be.true;
//     });
// })