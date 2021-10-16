let StringBuilder = require('./13-string-builder');
const { assert } = require('chai');

describe('Test String Builder', () => {

    describe('test constructor', () => {
        it('test constructor should throw when argument passed is not a string', () => {
            assert.throws(() => new StringBuilder(1), TypeError);
        })

        it('test constructor when undefined passed', () => {
            let sb = new StringBuilder(undefined);
            assert.equal(sb.toString(), '');
        })

        it('test constructor when undefined passed', () => {
            let sb = new StringBuilder('hello');
            assert.equal(sb.toString()[0], 'h');
            assert.equal(sb.toString()[1], 'e');
            assert.equal(sb.toString()[4], 'o');
        })
    });

    describe('test append method', () => {

        let sb;

        beforeEach('initialize StringBuilder', () => {
            sb = new StringBuilder('asd');
        });

        it('should put passed string to the end of the existing string', () => {
            sb.append('a');
            assert.equal(sb.toString(), 'asda');
            sb.append('ha');
            assert.equal(sb.toString(), 'asdaha');
            sb.append('');
            assert.equal(sb.toString(), 'asdaha');
        })
    })

    describe('test prepend method', () => {

        let sb;

        beforeEach('initialize StringBuilder', () => {
            sb = new StringBuilder('asd');
        });

        it('should put passed string to the beginning of the existing string', () => {
            sb.prepend('a');
            assert.equal(sb.toString(), 'aasd');
            sb.prepend('ha');
            assert.equal(sb.toString(), 'haaasd');
            sb.prepend('');
            assert.equal(sb.toString(), 'haaasd');
        })
    })

    describe('test insertAt method', () => {

        let sb;

        beforeEach('initialize StringBuilder', () => {
            sb = new StringBuilder('asd');
        });

        it('should insert string at zero index', () => {
            sb.insertAt('z', 0);
            assert.equal(sb.toString(), 'zasd');
        })

        it('should insert string at first index', () => {
            sb.insertAt('z', 1);
            assert.equal(sb.toString(), 'azsd');
        })

        it('should insert string at the end index minus the passed number when negative index is passed', () => {
            sb.insertAt('z', -1);
            assert.equal(sb.toString(), 'aszd');
        })

        it('should insert number in the end when string length is passed as argument', () => {
            sb.insertAt('z', 3);
            assert.equal(sb.toString(), 'asdz');
        })

        it('should insert number in the end when argument passed is greater than string lengt', () => {
            sb.insertAt('z', 6);
            assert.equal(sb.toString(), 'asdz');
        })
    })

    describe('test remove method', () => {

        let sb;

        beforeEach('initialize StringBuilder', () => {
            sb = new StringBuilder('asd');
        });

        it('should remove first letter when', () => {
            sb.remove(0, 1);
            assert.equal(sb.toString(), 'sd');
        })

        it('should remove first two letters', () => {
            sb.remove(0, 2);
            assert.equal(sb.toString(), 'd');
        })

        it('should remove all leters when length is equal exising string length', () => {
            sb.remove(0, 3);
            assert.equal(sb.toString(), '');
        })

        it('should remove all leters when length is great than exising string length', () => {
            sb.remove(0, 4);
            assert.equal(sb.toString(), '');
        })

        it('should remove last letter', () => {
            sb.remove(2, 1);
            assert.equal(sb.toString(), 'as');
        })

        it('should remove nothing when index passed is greater than string length', () => {
            sb.remove(5, 1);
            assert.equal(sb.toString(), 'asd');
        })

        it('should start removing from zero when negative index passed', () => {
            sb.remove(-5, 2);
            assert.equal(sb.toString(), 'd');

        })
    });
});