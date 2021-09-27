function solve() {

  let text = document.getElementById('input').value;

  let sentences = text.split('.').filter(s => s != '').map(s => s + '.');

  let outputElement = document.getElementById('output');

  for (let i = 0; i < sentences.length; i++) {

    if(sentences[i].length < 1) {
      continue;
    }

    if (i % 3 == 0) {
      let paragraph = document.createElement('p');

      let sentence = document.createTextNode(sentences[i]);

      paragraph.appendChild(sentence);
      outputElement.appendChild(paragraph);
    } else {

      let sentence = document.createTextNode(sentences[i]);

      let paragraphs = document.querySelectorAll('div#output p');
      let paragraph = paragraphs[paragraphs.length - 1];

      paragraph.appendChild(sentence);
    }
  }
}