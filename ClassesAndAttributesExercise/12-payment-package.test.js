const PaymentPackage = require('./12-payment-package');
const { assert, should } = require('chai');

describe('Test class', () => {
    let paymentPackage;

    beforeEach('instantiate PaymentPackage', () => {
        paymentPackage = new PaymentPackage('HR Services', 1500);
    });

    describe('test constructor and getters', () => {
        it('should have passed name and value, and default VAT and active status', () => {
            assert.equal(paymentPackage.name, 'HR Services');
            assert.equal(paymentPackage.value, 1500);
            assert.equal(paymentPackage.VAT, 20);
            assert.equal(paymentPackage.active, true);
        });
    });

    describe('test name setter', () => {
        it('should throw when passed name is an integer', () => {
            assert.throws(() => paymentPackage.name = 12, Error, 'Name must be a non-empty string');
        })

        it('should throw when passed name is null', () => {
            assert.throws(() => paymentPackage.name = null, Error);
        })

        it('should throw when passed name is undefined', () => {
            assert.throws(() => paymentPackage.name = undefined, Error);
        })

        it('should throw when passed name is an empty string', () => {
            assert.throws(() => paymentPackage.name = '', Error);
        })

        it('should set new name', () => {
            paymentPackage.name = 'hello';
            assert.equal(paymentPackage.name, 'hello');
        })
    });

    describe('test VAT setter', () => {
        it('should throw when passed VAT is a string', () => {
            assert.throws(() => paymentPackage.VAT = '1', Error);
        })

        it('should throw when passed VAT is null', () => {
            assert.throws(() => paymentPackage.VAT = null, Error);
        })

        it('should throw when passed VAT is undefined', () => {
            assert.throws(() => paymentPackage.VAT = undefined, Error);
        })

        it('should throw when passed VAT is lower than zero', () => {
            assert.throws(() => paymentPackage.VAT = -1, Error);
        })

        it('should set new VAT', () => {
            paymentPackage.VAT = 1;
            assert.equal(paymentPackage.VAT, 1);
            paymentPackage.VAT = 0;
            assert.equal(paymentPackage.VAT, 0);
        })
    });

    describe('test active setter', () => {
        it('should throw when passed VAT is a string', () => {
            assert.throws(() => paymentPackage.active = '1', Error);
        })

        it('should throw when passed VAT is an integer', () => {
            assert.throws(() => paymentPackage.active = 1, Error);
        })

        it('should throw when passed VAT is undefined', () => {
            assert.throws(() => paymentPackage.active = undefined, Error);
        })

        it('should throw when passed VAT is null', () => {
            assert.throws(() => paymentPackage.active = null, Error);
        })

        it('should set active', () => {
            paymentPackage.active = true;
            assert.isTrue(paymentPackage.active);
            paymentPackage.active = false;
            assert.isFalse(paymentPackage.active);
        })
    })

    describe('test toString method', () => {
        it('should return the correct string representation', () => {
            const output = [
                `Package: ${paymentPackage.name}`,
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];

            assert.equal(paymentPackage.toString(), output.join('\n'));
        })

        it('should throw when passed VAT is a string', () => {
            paymentPackage.active = false;
            const output = [
                `Package: ${paymentPackage.name} (inactive)`,
                `- Value (excl. VAT): ${paymentPackage.value}`,
                `- Value (VAT ${paymentPackage.VAT}%): ${paymentPackage.value * (1 + paymentPackage.VAT / 100)}`
            ];

            assert.equal(paymentPackage.toString(), output.join('\n'));
        })
    })

    describe('set value', () => {
        it('should throw when argument is not a type number', () => {
            assert.throw(() => new PaymentPackage('a', '5', 'Value must be a non-negative number'));
        })

        it('should throw when number is less than zero', () => {
            assert.throw(() => new PaymentPackage('a', -1, 'Value must be a non-negative number'));
        })

        it('should set new number when argument is a valid number [0]', () => {
            let payment = new PaymentPackage('a', 0);
            assert.equal(payment.value, 0);
        })

        it('should set new number when argument is a valid number [1]', () => {
            let payment = new PaymentPackage('a', 1);
            assert.equal(payment.value, 1);
        })
    })

});