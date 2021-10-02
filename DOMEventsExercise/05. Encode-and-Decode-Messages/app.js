function encodeAndDecodeMessages() {

    let textField = document.getElementsByTagName('textarea');

    let encodeButton = document.querySelectorAll('div button')[0];
    let decodeButton = document.querySelectorAll('div button')[1];

    encodeButton.addEventListener('click', encode);

    function encode() {
        let message = textField[0].value;

        let encodedMessage = '';

        for (let index = 0; index < message.length; index++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(index) + 1);
        }

        textField[0].value = '';

        textField[1].value = encodedMessage;

        decodeButton.addEventListener('click', function (e) {
            textField[1].value = message;
        });
    }
}

//Test: The password for my bank account is 123pass321 -> Uif!qbttxpse!gps!nz!cbol!bddpvou!jt!234qbtt432