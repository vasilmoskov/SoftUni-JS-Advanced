function lockedProfile() {

    // Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));
    document.getElementById('main').addEventListener('click', onToggle);

    function onToggle(e) {
        if (e.target.tagName == 'BUTTON') {

            let profile = e.target.parentElement;
            let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

            if (isActive) {
                let divElement = profile.querySelector('div');

                if (e.target.textContent == 'Show more') {
                    divElement.style.display = 'block';
                    e.target.textContent = 'Hide it';
                } else {
                    divElement.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        }
    }
}