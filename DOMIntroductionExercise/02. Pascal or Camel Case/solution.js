function solve() {
  let text = document.getElementById('text').value;

  let namingConvention = document.getElementById('naming-convention').value;

  let strings = text.split(' ');

  let result = '';

  switch (namingConvention) {
    case 'Camel Case':
      for (let i = 0; i < strings.length; i++) {
        let string = strings[i].toLowerCase();

        if (i > 0) {
          string = string.charAt(0).toUpperCase() + string.slice(1);
        }

        result += string;
      }
      break;

    case 'Pascal Case':
      for (let i = 0; i < strings.length; i++) {
        let string = strings[i].toLowerCase();

        string = string.charAt(0).toUpperCase() + string.slice(1);

        result += string;
      }
      break;
    default:
      result = 'Error!';
      break
  }

  document.getElementById('result').textContent = result;
}