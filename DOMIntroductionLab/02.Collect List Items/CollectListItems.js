function extractText() {
    let elements = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("#result");

    for (let elem of elements) {
        textArea.value += elem.textContent + "\n";
    }
}