function solve() {
    let onScreenButton = document.querySelector('#container > button');
    let movieListElement = document.querySelector('#movies ul');
    let archiveListElement = document.querySelector('#archive ul');
    let clearButton = document.querySelector('#archive > button');

    clearButton.addEventListener('click', clearArchive);

    onScreenButton.addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        let movieName = e.target.parentElement.querySelector('input[placeholder="Name"]');
        let movieHall = e.target.parentElement.querySelector('input[placeholder="Hall"]');
        let ticketPrice = e.target.parentElement.querySelector('input[placeholder="Ticket Price"]');

        if (movieName.value.trim() != '' && movieHall.value.trim() != '' && ticketPrice.value.trim() != '' && !isNaN(Number(ticketPrice.value))) {
            let liElement = document.createElement('li');

            let movieNameElement = document.createElement('span');
            movieNameElement.textContent = movieName.value;
            liElement.appendChild(movieNameElement);

            let movieHallElement = document.createElement('strong');
            movieHallElement.textContent = `Hall: ${movieHall.value}`;
            liElement.appendChild(movieHallElement);

            let ticketPriceDivElement = document.createElement('div');

            let ticketPriceStrongElement = document.createElement('strong');
            ticketPriceStrongElement.textContent = Number(ticketPrice.value).toFixed(2);
            ticketPriceDivElement.appendChild(ticketPriceStrongElement);

            let ticketPriceInputElement = document.createElement('input');
            ticketPriceInputElement.placeholder = "Tickets Sold";
            // ticketPriceInputElement.setAttribute('placeholder', 'Tickets Sold');
            ticketPriceDivElement.appendChild(ticketPriceInputElement);

            let ticketPriceButtonElement = document.createElement('button');
            ticketPriceButtonElement.textContent = "Archive";
            ticketPriceButtonElement.addEventListener('click', archiveMovie);
            ticketPriceDivElement.appendChild(ticketPriceButtonElement);

            liElement.appendChild(ticketPriceDivElement);

            movieListElement.appendChild(liElement);

            movieName.value = '';
            movieHall.value = '';
            ticketPrice.value = '';
        }
    }

    function archiveMovie(e) {
        let moviePriceDivElement = e.target.parentElement;
        let moviePrice = Number(moviePriceDivElement.querySelector('strong').textContent);
        let ticketsCount = Number(moviePriceDivElement.querySelector('input').value);

        if (!isNaN(ticketsCount) && ticketsCount > 0) {
            let liElement = document.createElement('li');

            let movieNameElement = e.target.parentElement.parentElement.querySelector('span');
            liElement.appendChild(movieNameElement);

            let totalAmount = moviePrice * ticketsCount;
            let totalAmountElement = document.createElement('strong');
            totalAmountElement.textContent = `Total amount: ${totalAmount.toFixed(2)}`;
            liElement.appendChild(totalAmountElement);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', deleteMovie);
            liElement.appendChild(deleteButton);

            archiveListElement.appendChild(liElement);
            e.target.parentElement.parentElement.remove();
        }
    }

    function deleteMovie(e) {
        e.target.parentElement.remove();
    }

    function clearArchive(e) {
        Array.from(document.querySelectorAll('#archive ul li')).forEach(li => li.remove());
    }
}