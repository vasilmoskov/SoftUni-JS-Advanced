function solve() {

  let questions = Array.from(document.querySelectorAll('body div section'));

  let result = document.querySelector('#results li h1');

  let rightAnswersCount = 0;

  for (let i = 0; i < questions.length; i++) {
    let possibleAnswers = Array.from(questions[i].getElementsByClassName('answer-text'));

    possibleAnswers.forEach(a => a.addEventListener('click', function (e) {
      if (a.textContent == "onclick" ||
        a.textContent == "JSON.stringify()" ||
        a.textContent == "A programming API for HTML and XML documents") {
        rightAnswersCount++;
      }

      questions[i].style.display = 'none';

      if (i == questions.length - 1) {
        result.parentNode.parentNode.style.display = 'block';

        rightAnswersCount == 3
          ? result.textContent = "You are recognized as top JavaScript fan!"
          : result.textContent = `You have ${rightAnswersCount} right answers`;

      } else {
        questions[i + 1].style.display = 'block'
      }
    }));
  }
}
