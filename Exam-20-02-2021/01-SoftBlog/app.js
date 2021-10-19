function solve() {

   let inputFields = document.querySelectorAll('form p input');
   let auhtorInput = inputFields[0];
   let titleInput = inputFields[1];
   let categoryInput = inputFields[2];
   let contentInput = document.getElementById('content');

   let createButton = document.getElementsByClassName('btn create')[0];
   let archiveSection = document.querySelector('.archive-section ol');
   let mainSection = document.querySelector('main section');

   createButton.addEventListener('click', createButtonHandler);

   function createButtonHandler(e) {
      e.preventDefault();

      //    let articleElement = createTemplate('article', {}, 
      //       createTemplate('h1', {}, titleInput.value),   
      //       createTemplate('p', {}, 'Category:'),   
      //    )
      // }

      let articleElement = document.createElement('article');

      let titleH1Element = document.createElement('h1');
      titleH1Element.textContent = titleInput.value;

      let categoryPElement = document.createElement('p');
      categoryPElement.textContent = 'Category:';
      let categoryStrongElement = document.createElement('strong');
      categoryStrongElement.textContent = categoryInput.value;
      categoryPElement.appendChild(categoryStrongElement);

      let creatorPElement = document.createElement('p');
      creatorPElement.textContent = 'Creator:';
      let creatorStrongElement = document.createElement('strong');
      creatorStrongElement.textContent = auhtorInput.value;
      creatorPElement.appendChild(creatorStrongElement);

      let contentPElement = document.createElement('p');
      contentPElement.textContent = contentInput.value;

      let buttonsDivElement = document.createElement('div');
      buttonsDivElement.classList.add('buttons');

      let deleteButton = document.createElement('button');
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Delete';

      let archiveButton = document.createElement('button');
      archiveButton.classList.add("btn");
      archiveButton.classList.add("archive");
      archiveButton.textContent = 'Archive';

      buttonsDivElement.appendChild(deleteButton);
      buttonsDivElement.appendChild(archiveButton);



      articleElement.appendChild(titleH1Element);
      articleElement.appendChild(categoryPElement);
      articleElement.appendChild(creatorPElement);
      articleElement.appendChild(contentPElement);
      articleElement.appendChild(buttonsDivElement);

      mainSection.appendChild(articleElement);

      deleteButton.addEventListener('click', deleteButtonHandler.bind(null, articleElement));
      archiveButton.addEventListener('click', archiveButtonHandler.bind(null, titleH1Element, articleElement));

      auhtorInput.value = '';
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';

   }

   function archiveButtonHandler(titleH1Element, articleElement) {
      let titlePElement = document.createElement('li');
      titlePElement.textContent = titleH1Element.textContent;
      archiveSection.appendChild(titlePElement);
      articleElement.remove();

      Array.from(archiveSection.getElementsByTagName("LI"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => archiveSection.appendChild(li));
   }

   function deleteButtonHandler(articleElement) {
      articleElement.remove();
   }


   function createTemplate(type, attr, ...content) {
      const element = document.createElement(type);

      for (let prop in attr) {
         element[prop] = attr[prop];
      }

      for (let item of content) {
         if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
         }
         element.appendChild(item);
      }

      return element;
   }

}
