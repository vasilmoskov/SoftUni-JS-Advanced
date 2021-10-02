function addItem() {
    let menuElement = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    menuElement.appendChild(optionElement);

    newItemText.value = '';
    newItemValue.value = '';
}