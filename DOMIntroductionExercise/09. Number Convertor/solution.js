function solve() {
    let selectMenuToElement = document.getElementById('selectMenuTo');

    let binaryElement = document.createElement('option');
    //let binaryElement = selectMenuToElement.children[0];
    binaryElement.textContent = 'Binary';
    binaryElement.value = 'binary';
    selectMenuToElement.appendChild(binaryElement);

    let hexDecimalElement = binaryElement.cloneNode(true);
    hexDecimalElement.textContent = 'Hexadecimal';
    hexDecimalElement.value = 'hexadecimal';
    selectMenuToElement.appendChild(hexDecimalElement);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {

        let number = document.getElementById('input');

        let result = document.getElementById('result');

        if (selectMenuToElement.value == "binary") {
            result.value = Number(number.value).toString(2);

        } else if (selectMenuToElement.value == "hexadecimal") {
            result.value = Number(number.value).toString(16).toUpperCase();
        }
    }
}