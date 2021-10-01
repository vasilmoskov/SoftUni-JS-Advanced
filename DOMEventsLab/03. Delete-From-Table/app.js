function deleteByEmail() {

    let rows = document.querySelectorAll('tbody tr td');

    let searchedEmail = document.getElementsByTagName('label')[0].children[0].value;
    //document.getElementsByName('email')[0].value;

    let output = document.getElementById('result');

    let deleted = false;

    for (let email of rows) {
        if (email.textContent == searchedEmail) {
            let row = email.parentNode;
            row.parentNode.removeChild(row);
            // email.parentNode.remove();
            output.textContent = 'Deleted.'
            deleted = true;
            break;
        }
    }

    if (!deleted) {
        output.textContent = 'Not found.'
    }
}