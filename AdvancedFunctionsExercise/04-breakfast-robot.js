function solution() {

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    commands = {
        restock: (microelement, quantity) => {
            microelements[microelement] += Number(quantity);
            return 'Success';
        },
        prepare: (recipe, quantity) => {

            let carbohydrateNeeded = 0;
            let flavourNeeded = 0;
            let fatNeeded = 0;
            let proteinNeeded = 0;

            switch (recipe) {
                case 'apple':
                    carbohydrateNeeded = quantity * 1;
                    flavourNeeded = quantity * 2;
                    break;
                case 'lemonade':
                    carbohydrateNeeded = quantity * 10;
                    flavourNeeded = quantity * 20;
                    break;
                case 'burger':
                    carbohydrateNeeded = quantity * 5;
                    fatNeeded = quantity * 7;
                    flavourNeeded = quantity * 3;
                    break;
                case 'eggs':
                    proteinNeeded = quantity * 5;
                    fatNeeded = quantity * 1;
                    flavourNeeded = quantity * 1;
                    break;
                case 'turkey':
                    proteinNeeded = quantity * 10;
                    carbohydrateNeeded = quantity * 10;
                    fatNeeded = quantity * 10;
                    flavourNeeded = quantity * 10;
                    break;
            }

            if (microelements.protein < proteinNeeded) {
                return `Error: not enough protein in stock`;
            }

            if (microelements.carbohydrate < carbohydrateNeeded) {
                return `Error: not enough carbohydrate in stock`;
            }

            if (microelements.fat < fatNeeded) {
                return `Error: not enough fat in stock`;
            }

            if (microelements.flavour < flavourNeeded) {
                return `Error: not enough flavour in stock`;
            }

            microelements.carbohydrate -= carbohydrateNeeded;
            microelements.protein -= proteinNeeded;
            microelements.fat -= fatNeeded;
            microelements.flavour -= flavourNeeded;

            return 'Success';
        },

        report: () => {
            let res = [];

            Object.keys(microelements).forEach(key => res.push(`${key}=${microelements[key]}`));

            return res.join(' ');
        }
    }

    return function (input) {

        let arr = input.split(' ');

        let res = '';

        if (arr[0] == 'restock') {
            return commands.restock(arr[1], arr[2]);
        } else if (arr[0] == 'prepare') {
            return commands.prepare(arr[1], arr[2]);
        } else if (arr[0] == 'report') {
            return commands.report();
        }
    }
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
// console.log(manager("restock carbohydrate 10")); //  
// console.log(manager("restock flavour 10")); //  
// console.log(manager("prepare apple 1")); //  
// console.log(manager("restock fat 10")); //  
// console.log(manager("prepare burger 1")); //  
// console.log(manager("report")); //  

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report")); //  