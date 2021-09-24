function solve(input) {
    const products = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
 
        if (!products[product]) {
            products[product] = {};
        }
        products[product][town] = price;
    }
 
    for (const key in products) {
        const sorted = Object.entries(products[key]).sort((a, b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}