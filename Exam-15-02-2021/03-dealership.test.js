let dealership = require('./03-dealership');
let { assert } = require('chai');

describe("Test dealership", function () {
    describe("Test new car cost", function () {

        it("should return new car price without discount whem old car is not from the listed", function () {
            assert.equal(dealership.newCarCost('BMW 3', 10000), 10000);
        });

        it('should return discounted price when old model is in the list', () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 25000), 10000);
            assert.equal(dealership.newCarCost('Audi A6 4K', 25000), 5000);
            assert.equal(dealership.newCarCost('Audi A8 D5', 25000), 0);
            assert.equal(dealership.newCarCost('Audi TT 8J', 10000), -4000);
        })
    });

    describe('test car equipment', () => {
        it('should return first extra', () => {
            let expected = JSON.stringify(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0]));
            let actual = JSON.stringify(['heated seats']);

            assert.equal(expected, actual);
        })

        it('should return last extra', () => {
            let expected = JSON.stringify(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3]));
            let actual = JSON.stringify(['navigation']);

            assert.equal(expected, actual);
        })

        it('should return two extras in the middle', () => {
            let expected = JSON.stringify(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2]));
            let actual = JSON.stringify(['sliding roof', 'sport rims']);

            assert.equal(expected, actual);
        })

        it('should return null when invalid index is passed', () => {
            let expected = JSON.stringify(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [6]));
            let actual = JSON.stringify([null]);

            assert.equal(expected, actual);
        })
    })

    describe('test euroCategory', () => {
        it('should get discount when category is 4 or more', () => {
            assert.equal(dealership.euroCategory(4), 'We have added 5% discount to the final price: 14250.');
            assert.equal(dealership.euroCategory(5), 'We have added 5% discount to the final price: 14250.');
        })

        it('should not get discount when category is 3 or less', () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(0), 'Your euro category is low, so there is no discount from the final price!');
        })
    })
});
