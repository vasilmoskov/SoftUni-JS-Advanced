(function solve() {
    String.prototype.ensureStart = function (start) {
        if (this.startsWith(start)) {
            return this.toString();
        }

        return start.concat(this);
    }

    String.prototype.ensureEnd = function (end) {
        if (this.endsWith(end)) {
            return this.toString();
        }

        return this.concat(end);
    }

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let words = this.split(' ');

            do {
                words.pop();
            } while (words.join(' ').length + 3 > n);

            return sentence = `${words.join(' ')}...`;
        }

        if (n > 3) {
            return `${this.slice(0, n - 3)}...`;
        }

        return '.'.repeat(n);
    }

    String.format = function (string, ...params) {
        let i = 0;

        while (i < params.length) {
            string = string.replace(`{${i}}`, params[i++])
        }

        return string;
    }
}());


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');

    console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
    console.log(str);
