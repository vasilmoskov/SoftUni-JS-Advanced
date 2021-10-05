function solve() {
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addTask);

    let openSection = document.querySelectorAll('section')[1].querySelectorAll('div')[1];
    let inProgressSection = document.getElementById('in-progress');
    let completeSection = document.querySelectorAll('section')[3].querySelectorAll('div')[1];


    function addTask(e) {
        e.preventDefault();

        let taskElement = document.getElementById('task');
        let descriptionElement = document.getElementById('description');
        let dateElement = document.getElementById('date');

        let task = taskElement.value;
        let description = descriptionElement.value;
        let date = dateElement.value;

        if (task.trim() !== '' && description.trim() !== '' && date.trim() !== '') {
            let articleElement = document.createElement('article');

            let headerElementForTask = document.createElement('h3');
            headerElementForTask.textContent = task;

            let pElementForDescription = document.createElement('p');
            pElementForDescription.textContent = `Description: ${description}`;

            let pElementForDate = document.createElement('p');
            pElementForDate.textContent = `Due Date: ${date}`;

            let divElementForClass = document.createElement('div');
            divElementForClass.classList.add('flex');

            let startButton = document.createElement('button');
            startButton.classList.add('green');
            startButton.textContent = 'Start';
            startButton.addEventListener('click', startHandler);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('red');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteHandler);

            divElementForClass.appendChild(startButton);
            divElementForClass.appendChild(deleteButton);

            articleElement.appendChild(headerElementForTask);
            articleElement.appendChild(pElementForDescription);
            articleElement.appendChild(pElementForDate);
            articleElement.appendChild(divElementForClass);

            openSection.appendChild(articleElement);

            taskElement.value = '';
            descriptionElement.value = '';
            dateElement.value = '';
        }
    }

    function startHandler(e) {
        let divElement = e.target.parentElement;
        inProgressSection.appendChild(divElement.parentElement);

        let buttons = divElement.children;
        let finishButton = buttons[0].cloneNode(true);
        console.log(finishButton);
        buttons[0].remove();

        finishButton.classList.remove("green");
        finishButton.classList.add("orange");
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', finishHandler);

        divElement.appendChild(finishButton);
    }

    function deleteHandler(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishHandler(e) {
        let articleElement = e.target.parentElement.parentElement;
        let divElement = e.target.parentElement;
        divElement.remove();
        completeSection.appendChild(articleElement);
    }
}