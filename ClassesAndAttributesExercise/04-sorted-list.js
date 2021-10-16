class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num) {
        this.list.push(num);
        this.size ++;
        this.list.sort((a, b) => a - b);
    }

    remove(index) {
        this._validateIndex(index)
        this.list.splice(index, 1);
        this.size --;
    }

    get(index) {
        this._validateIndex(index)
        return this.list[index];
    }

    _validateIndex(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error("No such index in list");
        }
    }
}




let list = new List();
list.add(5);
console.log(list.size);
list.add(6);
console.log(list.size);
list.add(7);
console.log(list.size);

console.log(list.get(1));
list.remove(1);
console.log(list.size);

console.log(list.get(1));
