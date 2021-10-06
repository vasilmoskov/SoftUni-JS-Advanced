const rgbToHexColor = require('./06-rgb-to-hex');
const {assert} = require('chai');

describe('test rgb to he', () => {
    it('should return undefinded when passed arguments are invalid', () => {
        assert.equal(rgbToHexColor(-1, 2, 2), undefined);
        assert.equal(rgbToHexColor(256, 2, 2), undefined);
        assert.equal(rgbToHexColor("2", 2, 2), undefined);
        assert.equal(rgbToHexColor(null, 2, 2), undefined);
        assert.equal(rgbToHexColor(2, -1, 2), undefined);
        assert.equal(rgbToHexColor(2, 256, 2), undefined);
        assert.equal(rgbToHexColor(2, "2", 2), undefined);
        assert.equal(rgbToHexColor(2, null, 2), undefined);
        assert.equal(rgbToHexColor(2, 2, -1), undefined);
        assert.equal(rgbToHexColor(2, 2, 256), undefined);
        assert.equal(rgbToHexColor(2, 2, "2"), undefined);
        assert.equal(rgbToHexColor(2, 2, null), undefined);
        assert.equal(rgbToHexColor(2, 2), undefined);
        assert.equal(rgbToHexColor(2), undefined);
        assert.equal(rgbToHexColor(-1, -1, -1), undefined);
        assert.equal(rgbToHexColor(256, 256, 256), undefined);
        assert.equal(rgbToHexColor('0', '0', '0'), undefined);
    });

    it('convers white', () => {
        assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
    });

    it('convers black', () => {
        assert.equal(rgbToHexColor(0, 0, 0), "#000000");
    });

    it('should return correct hex code when passed arguments are valid', () => {
        assert.equal(rgbToHexColor(3, 3, 3), "#030303");
        assert.equal(rgbToHexColor(5, 8, 12), "#05080C");
    });
})
