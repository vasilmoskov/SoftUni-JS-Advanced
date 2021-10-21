function solution() {

    let sections = document.querySelectorAll('.card');

    let giftInput = sections[0].querySelector('div input');
    let addButton = sections[0].querySelector('div button');

    let listOfGifts = sections[1].querySelector('ul');
    let sentGifts = sections[2].querySelector('ul');
    let discardedGifts = sections[3].querySelector('ul');

    addButton.addEventListener('click', addGift);

    function addGift(e) {
        let gift = giftInput.value;

        if (gift == '' || undefined) {
            return;
        }

        let liElement = document.createElement('li');
        liElement.textContent = gift;
        liElement.classList.add('gift');

        let sendButton = document.createElement('button');
        sendButton.id = 'sendButton';
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', sendGift.bind(null, liElement));
        liElement.appendChild(sendButton);

        let discardButton = document.createElement('button');
        discardButton.id = 'discardButton';
        discardButton.textContent = 'Discard';
        discardButton.addEventListener('click', discardGift.bind(null, liElement));
        liElement.appendChild(discardButton);

        listOfGifts.appendChild(liElement);

        Array.from(listOfGifts.getElementsByTagName('LI'))
            .sort((li1, li2) => li1.textContent.localeCompare(li2.textContent))
            .forEach(li => listOfGifts.appendChild(li));

        giftInput.value = '';
    }

    function sendGift(liElement) {
        Array.from(liElement.querySelectorAll('button')).forEach(c => c.remove());
        sentGifts.appendChild(liElement);
    }

    function discardGift(liElement) {
        Array.from(liElement.querySelectorAll('button')).forEach(c => c.remove());
        discardedGifts.appendChild(liElement);
    }
}