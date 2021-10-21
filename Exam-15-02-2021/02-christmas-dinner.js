class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(budget) {
        if (budget < 0) {
            throw new Error("The budget cannot be a negative number");
        }

        this._budget = budget;
    }

    shopping(product) {
        let [type, price] = product;

        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {

        let productsList = recipe.productsList;

        for (const p of productsList) {
            if (!this.products.includes(p)) {
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let inMenu = this.dishes.some(d => d.recipeName == dish);

        if (!inMenu) {
            throw new Error("We do not have this dish");
        }

        if (this.guests[name] != undefined) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];

        for (let guest in this.guests) {
            result.push(`${guest} will eat ${this.guests[guest]}, which consists of ${this.dishes
                .find(d => d.recipeName == this.guests[guest])
                .productsList
                .join(', ')}`);
        }

        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());