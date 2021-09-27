function generateReport() {

    let checkboxes = Array.from(document.querySelectorAll('thead tr th input'));

    let selectedByIndex = [];

    checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedByIndex.push(checkboxes.indexOf(cb));
        }
    });

    if(selectedByIndex.length == 0) {
        return;
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let selectedObjects = [];

    for (const row of rows) {
        let fields = row.children;

        let obj = {};

        for (const i of selectedByIndex) {
            let key = checkboxes[i].name;
            obj[key] = fields[i].textContent;
        }

        selectedObjects.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(selectedObjects, null, 2);
}