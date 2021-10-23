window.addEventListener('load', solve);

function solve() {
    let inputFields = document.querySelectorAll('#append-song input');
    let genreInput = inputFields[0];
    let nameOfSongInput = inputFields[1];
    let authorOfSongInput = inputFields[2];
    let dateInput = inputFields[3];

    let addButton = document.getElementById('add-btn');

    let collectionOfSongsElement = document.querySelector('.all-hits-container'); 
    let savedSongsElement = document.querySelector('.saved-container'); 

    let totalLikesParagraph = document.querySelector('#total-likes p');

    addButton.addEventListener('click', addSong);

    function addSong(e) {
        e.preventDefault();

        let genre = genreInput.value;
        let name = nameOfSongInput.value;
        let author = authorOfSongInput.value;
        let date = dateInput.value;

        if(genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        let divHitsInfoElement = document.createElement('div');
        divHitsInfoElement.classList.add('hits-info');

        let imgElement = document.createElement('img');
        imgElement.src = "./static/img/img.png";

        let genreH2Element = document.createElement('h2');
        genreH2Element.textContent = `Genre: ${genre}`;

        let nameH2Element = document.createElement('h2');
        nameH2Element.textContent = `Name: ${name}`;

        let authorH2Element = document.createElement('h2');
        authorH2Element.textContent = `Author: ${author}`;

        let dateH2Element = document.createElement('h3');
        dateH2Element.textContent = `Date: ${date}`;

        let saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'Save song';

        let likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = 'Like song';
        likeButton.addEventListener('click', likeSong);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';

        divHitsInfoElement.appendChild(imgElement);
        divHitsInfoElement.appendChild(genreH2Element);
        divHitsInfoElement.appendChild(nameH2Element);
        divHitsInfoElement.appendChild(authorH2Element);
        divHitsInfoElement.appendChild(dateH2Element);
        divHitsInfoElement.appendChild(saveButton);
        divHitsInfoElement.appendChild(likeButton);
        divHitsInfoElement.appendChild(deleteButton);

        collectionOfSongsElement.appendChild(divHitsInfoElement);

        saveButton.addEventListener('click', saveSong.bind(null, divHitsInfoElement, likeButton, saveButton));
        deleteButton.addEventListener('click', deleteSong.bind(null, divHitsInfoElement));

        genreInput.value = '';
        nameOfSongInput.value = '';
        authorOfSongInput.value = '';
        dateInput.value = '';
    }

    function saveSong(divHitsInfoElement, likeButton, saveButton) {
        likeButton.remove();
        saveButton.remove();
        savedSongsElement.appendChild(divHitsInfoElement);
    }

    function deleteSong(divHitsInfoElement) {
        divHitsInfoElement.remove();
    }

    function likeSong(e) {
        let likesCount = Number(totalLikesParagraph.textContent.split('Total Likes: ')[1]) + 1;

        totalLikesParagraph.textContent = `Total Likes: ${likesCount}`;

        e.target.disabled = true;
    }
}