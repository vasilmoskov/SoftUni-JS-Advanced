function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let cells = document.querySelectorAll('tbody tr');

      for (const cell of cells) {
         cell.classList.remove('select');
      }

      let searchedText = document.getElementById('searchField');

      for (let i = 0; i < cells.length; i++) {
         if (cells[i].children[0].textContent.includes(searchedText.value) ||
            cells[i].children[1].textContent.includes(searchedText.value) ||
            cells[i].children[2].textContent.includes(searchedText.value)) {

            cells[i].classList.add('select');

         }
      }

      searchedText.value = '';
   }
}