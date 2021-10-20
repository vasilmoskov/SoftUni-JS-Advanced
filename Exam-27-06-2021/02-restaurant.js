class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        for (let product of products) {

            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                this.budgetMoney -= productTotalPrice;

                if (this.stockProducts[productName] != undefined) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal] == undefined) {

            let mealObj = {
                products: neededProducts,
                price
            }

            this.menu[meal] = mealObj;

            let menuSize = Object.keys(this.menu).length;

            if (menuSize == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {

        let menuSize = Object.keys(this.menu).length;

        if (menuSize == 0) {
            return "Our menu is not ready yet, please come later...";
        } else {
            let result = [];

            for (let meal in this.menu) {
                result.push(`${meal} - $ ${this.menu[meal].price}`);
            }

            return result.join('\n');
        }
    }

    makeTheOrder(meal) {

        if (this.menu[meal] == undefined) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let mealObj = this.menu[meal];
            let productsNeededForMeal = mealObj.products;

            for (let currentProduct of productsNeededForMeal) {
                let [productName, productQuantity] = currentProduct.split(' ');
                productQuantity = Number(productQuantity);

                if (this.stockProducts[productName] < productQuantity || this.stockProducts[productName] == undefined) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
                }
            }

            for (let currentProduct of productsNeededForMeal) {
                let [productName, productQuantity] = currentProduct.split(' ');
                productQuantity = Number(productQuantity);

                this.stockProducts[productName] -= productQuantity;
                this.budgetMoney += mealObj.price;
            }

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${mealObj.price}.`;
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));


// kitchen.history.forEach(h => console.log(h.name, h.quantity))

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10', 'kashkaval 5'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
