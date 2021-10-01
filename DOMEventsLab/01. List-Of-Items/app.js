function addItem() {
    let list = document.getElementById('items');

    let item = document.createElement('li');

    let text = document.getElementById('newItemText');

    item.appendChild(document.createTextNode(text.value));

    list.appendChild(item);

    text.value = '';
}