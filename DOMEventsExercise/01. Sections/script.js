function create(words) {
   let result = document.getElementById('content');

   for (const word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      let textElement = document.createTextNode(word);

      pElement.style.display = 'none';
      pElement.appendChild(textElement);
      divElement.appendChild(pElement);
      divElement.addEventListener('click', show);
      result.appendChild(divElement);
   }

   function show(e) {
      e.target.children[0].style.display = 'block';
   }
}