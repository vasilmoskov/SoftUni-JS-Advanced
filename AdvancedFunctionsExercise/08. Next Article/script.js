function getArticleGenerator(articles) {

    let index = 0;
    let divElement = document.querySelector('#content');

    return function () {
        if (index < articles.length) {
            let newArticle = document.createElement('article');
            newArticle.textContent = articles[index++];
            divElement.appendChild(newArticle);
        }
    }

}
