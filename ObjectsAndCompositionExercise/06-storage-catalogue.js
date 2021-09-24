function solution(input) {

    let result = [];

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' : ');

        let product = {
            productName: tokens[0],
            productPrice: Number(tokens[1])
        }

        result.push(product);
    }

    let asd;

    result.sort((a, b) => a.productName.localeCompare(b.productName));

    let firstLetters = [];

    for (const product of result) {

        if (!firstLetters.includes(product.productName.charAt(0))) {
            firstLetters.push(product.productName.charAt(0));
            console.log(product.productName.charAt(0));
        }

        console.log(`  ${product.productName}: ${product.productPrice}`);
    }
}


solution(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']


);