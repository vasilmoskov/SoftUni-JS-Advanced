const lookupChar = require('./03-char-lookup');
const {assert} = require('chai');

describe('Test Lookup Char', () => {
    it('should return undefinded when invalid argument is passed', () => {
        assert.isUndefined(lookupChar(5, 0));
        assert.isUndefined(lookupChar([], 0));
        assert.isUndefined(lookupChar('string', '0'));
        assert.isUndefined(lookupChar('string', []));
        assert.isUndefined(lookupChar('string', 2.2));
    });

    it('should return message for incorrect index', () => {
        assert.equal(lookupChar('string', -1), "Incorrect index");
        assert.equal(lookupChar('string', 6), "Incorrect index");
    });

    it('should return corresponding char when valid arguments are passed', () => {
        assert.equal(lookupChar('string', 0), "s");
        assert.equal(lookupChar('string', 1), "t");
        assert.equal(lookupChar('string', 5), "g");
    });
});