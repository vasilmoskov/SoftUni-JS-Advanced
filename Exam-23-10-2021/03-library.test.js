let library = require('./library');
const { assert } = require('chai');

describe("Test library", function () {
    describe("Test calcPriceOfBook", function () {

        it("should return sum of 10.00 when book age is 1980 or less", function () {
            assert.equal(library.calcPriceOfBook('Pod igoto', 1980), 'Price of Pod igoto is 10.00');
            assert.equal(library.calcPriceOfBook('Radecki', 1979), 'Price of Radecki is 10.00');
            assert.equal(library.calcPriceOfBook('Radecki', -1), 'Price of Radecki is 10.00');
        });

        it("should return sum of 20.00 when book age is 1981 or more", function () {
            assert.equal(library.calcPriceOfBook('Levski', 1981), 'Price of Levski is 20.00');
            assert.equal(library.calcPriceOfBook('Na proshtavane', 1990), 'Price of Na proshtavane is 20.00');
        });

        it("should return empty name for book when empty string is passed", function () {
            assert.equal(library.calcPriceOfBook('', 1981), 'Price of  is 20.00');
        });

        it("should throw an error when invalid argument is passed", function () {
            assert.throw(() => library.calcPriceOfBook(undefined, 1980));
            assert.throw(() => library.calcPriceOfBook([], 1980));
            assert.throw(() => library.calcPriceOfBook({}, 1980));
            assert.throw(() => library.calcPriceOfBook(null, 1980));
            assert.throw(() => library.calcPriceOfBook(1981, 1980));
            assert.throw(() => library.calcPriceOfBook(true, 1980));
            assert.throw(() => library.calcPriceOfBook(false, 1980));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', '1980'));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', 1980.90));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', []));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', {}));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', true));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', false));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', null));
            assert.throw(() => library.calcPriceOfBook('Pod igoto', undefined));
        });
    });

    describe('test findBook', () => {
        it('should return positive answer when the book is in the library', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Troy"), 'We found the book you want.');
        });

        it('should return negative answer when the book is not in the library', () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Pod igoto"), 'The book you are looking for is not here!');
        });

        it('should throw when arrays length is 0', () => {
            assert.throw(() => library.findBook([], 'Pod igoto'));
        })

    })

    describe('test arrange books', () => {
        it('should throw when argument passed is not an integer', () => {
            assert.throw(() => library.arrangeTheBooks('1980'));
            assert.throw(() => library.arrangeTheBooks(1980.90));
            assert.throw(() => library.arrangeTheBooks([]));
            assert.throw(() => library.arrangeTheBooks({}));
            assert.throw(() => library.arrangeTheBooks(true));
            assert.throw(() => library.arrangeTheBooks(false));
            assert.throw(() => library.arrangeTheBooks(null));
            assert.throw(() => library.arrangeTheBooks(undefined));
        })

        it('should throw when argument is a negative number', () => {
            assert.throw(() => library.arrangeTheBooks(-1));
        })  

        it('should return positive answer when there is enough space for the passed amount of books', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(39), 'Great job, the books are arranged.');
        })

        it('should return negative answer when there is no enough space for the passed amount of books', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        })
    })
});

