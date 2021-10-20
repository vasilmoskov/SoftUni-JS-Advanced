window.addEventListener('load', solution);

function solution() {
  let inputFields = document.querySelectorAll('#form input');
  let fullNameInput = inputFields[0];
  let emailInput = inputFields[1];
  let phoneNumberInput = inputFields[2];
  let addressInput = inputFields[3];
  let postalCodeInput = inputFields[4];
  let submitButton = inputFields[5];

  let editButton = document.getElementById('editBTN');
  let continueButton = document.getElementById('continueBTN');

  let infoPreviewElement = document.getElementById('infoPreview');

  submitButton.addEventListener('click', submitButtonHandler);

  function submitButtonHandler(e) {
    let fullName = fullNameInput.value.trim();
    let email = emailInput.value.trim();
    let phoneNumber = phoneNumberInput.value.trim();
    let address = addressInput.value.trim();
    let postalCode = postalCodeInput.value.trim();

    if (fullName == undefined || fullName == '' || email == undefined || email == '') {
      return;
    }

    let fullNameLi = document.createElement('li');
    fullNameLi.textContent = `Full Name: ${fullName}`;

    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${email}`;

    let phoneNumberLi = document.createElement('li');
    phoneNumberLi.textContent = `Phone Number: ${phoneNumber}`;

    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${address}`;

    let postalCodeLi = document.createElement('li');
    postalCodeLi.textContent = `Postal Code: ${postalCode}`;

    infoPreviewElement.appendChild(fullNameLi);
    infoPreviewElement.appendChild(emailLi);
    infoPreviewElement.appendChild(phoneNumberLi);
    infoPreviewElement.appendChild(addressLi);
    infoPreviewElement.appendChild(postalCodeLi);


    fullNameInput.value = '';
    emailInput.value = '';
    phoneNumberInput.value = '';
    addressInput.value = '';
    postalCodeInput.value = '';

    editButton.disabled = false;
    continueButton.disabled = false;
    submitButton.disabled = true;

    editButton.addEventListener('click', editButtonHandler.bind(null,infoPreviewElement, fullName, email, phoneNumber, address, postalCode));
    continueButton.addEventListener('click', continueButtonHandler);
  }

  function editButtonHandler(infoPreviewElement, fullName, email, phoneNumber, address, postalCode) {

    fullNameInput.value = fullName;
    emailInput.value = email;
    phoneNumberInput.value = phoneNumber;
    addressInput.value = address;
    postalCodeInput.value = postalCode;

    editButton.disabled = true;
    continueButton.disabled = true;
    submitButton.disabled = false;

    Array.from(infoPreviewElement.children).forEach(li => li.remove());
  }

  function continueButtonHandler(e) {
    let blockElement = document.getElementById('block');

    Array.from(blockElement.childNodes).forEach(c => c.remove());

    let h3Element = document.createElement('h3');
    h3Element.textContent = 'Thank you for your reservation!'

    blockElement.appendChild(h3Element);
  }

}
