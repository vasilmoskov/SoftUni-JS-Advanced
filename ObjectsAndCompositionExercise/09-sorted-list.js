function createSortedList() {

    let template = [];

    let list = {

        add: function (element) {
            template.push(element);
            this.size++;
            template.sort((a, b) => a - b);
        },

        remove: function (index) {
            if (index >= 0 && index < template.length) {
                this.size--;
                template.splice(index, 1);
            }
        },

        get: function (index) {
            if (index >= 0 && index < template.length) {
                return template[index];
            }
        },

        size: 0,
    };

    return list;
}

let list = createSortedList();
list.add(5);
console.log(list.size);
list.add(6);
list.add(7);
console.log(list.size);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);

