function addItem() {
    let items = document.getElementById('items');

    let liElement = document.createElement('li');

    let text = document.getElementById('newItemText');
    let liTextValue = document.createTextNode(text.value);
    liElement.appendChild(liTextValue);

    let deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener("click", deleteItem)

    liElement.appendChild(deleteButton);

    items.appendChild(liElement);

    text.value = '';

    function deleteItem () {
        liElement.remove();
    }
}
