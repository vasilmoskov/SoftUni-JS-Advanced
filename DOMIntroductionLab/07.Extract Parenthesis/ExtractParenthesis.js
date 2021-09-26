function extract(content) {

    let text = document.getElementById(content).textContent;

    let extracted = [];

    while (text.indexOf('(') != -1) {
        let openingParenthesis = text.indexOf('(');
        let closingParenthesis = text.indexOf(')');

        extracted.push(text.substring(openingParenthesis + 1, closingParenthesis));

        text = text.replace('(', '');
        text = text.replace(')', '');
    }

    return extracted.join('; ');
}