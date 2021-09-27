function search() {
   let towns = document.querySelectorAll('ul#towns li');

   let searchText = document.getElementById('searchText');

   let countMatches = 0;

   for (const town of towns) {
      if (town.textContent.includes(searchText.value)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         countMatches++;
      }
   }

   //searchText.value = '';

   document.getElementById('result').textContent = `${countMatches} matches found`;
}
