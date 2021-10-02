function solve() {

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));

  // let inputTextAreaElement = document.querySelector('div textArea');
  // let outputTextAreaElement = document.querySelectorAll('div textArea')[1];

  const [generateButton, buyButton] = document.querySelectorAll('button');

  // let generateButton = document.querySelector('div button');
  generateButton.addEventListener('click', addFurniture);

  // let buyButton = document.querySelectorAll('div button')[1];
  buyButton.addEventListener('click', buyFurniture);

  function addFurniture(e) {
    const data = JSON.parse(input.value);

    for (let item of data) {

      const row = document.createElement('tr');

      row.appendChild(createCell('img', {src: item.img}));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', {type: 'checkbox'}));

      table.appendChild(row);


      // let firstTableRow = document.querySelector('table tbody tr');
      // firstTableRow.children[4].children[0].disabled = false;

      // let furnitureElement = firstTableRow.cloneNode(true);
      // furnitureElement.children[0].children[0].src = obj.img;
      // furnitureElement.children[1].children[0].textContent = obj.name;
      // furnitureElement.children[2].children[0].textContent = obj.price;
      // furnitureElement.children[3].children[0].textContent = obj.decFactor;
      // furnitureElement.children[4].children[0].disabled = false;

      // firstTableRow.parentNode.appendChild(furnitureElement);
    }
  }

  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for (const prop in props) {
        nested[prop] = props[prop];
    }

    if(content) {
      nested.textContent = content;
    }

    cell.appendChild(nested);

    return cell;
  }

  function buyFurniture(e) {
    // let boughtFurniture = [];
    // let sum = 0;
    // let averageDecorationFactor = 0;

    // let rows = document.querySelectorAll('table tbody tr');

    // for (const row of rows) {
    //   console.log(row.children[4].children[0].checked);
    //   if (row.children[4].children[0].checked) {
    //     boughtFurniture.push(row.children[1].children[0].textContent);
    //     sum += Number(row.children[2].children[0].textContent);
    //     averageDecorationFactor += Number(row.children[3].children[0].textContent);
    //   }
    // }

    // averageDecorationFactor /= boughtFurniture.length;

    const furniture = Array
    .from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(b => b.parentElement.parentElement)
    .map(r => ({
      name: r.children[1].textContent,
      price: Number(r.children[2].textContent),
      decFactor: Number(r.children[3].textContent),
    }))
    .reduce((acc, c, i, a) => {
      acc.names.push(c.name);
      acc.total += c.price;
      acc.decFactor += c.decFactor / a.length;
      return acc;
    }, {names: [], total: 0, decFactor: 0});

    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

    output.value = result;
  }
}