function solve(ticketsDecsription, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };

    let result = [];

    for (const currentTicket of ticketsDecsription) {
        let [destination, price, status] = currentTicket.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);

        result.push(ticket);
    }

    return sortingCriterion == 'price'
        ? result.sort((t1, t2) => t1[sortingCriterion] - t2[sortingCriterion])
        : result.sort((t1, t2) => t1[sortingCriterion].localeCompare(t2[sortingCriterion]));
}

console.log(solve(['Philadelphia|194.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));

// console.log(solve(['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'price'));
