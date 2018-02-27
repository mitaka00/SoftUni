function getArticleGenerator(articles) {
    let container=$('#content');

    return function () {
        if(articles.length>0) {
            let article = $('<article>');
            let paragraph = $(`<p>${articles.shift()}</p>`);

            article.append(paragraph);
            container.append(article);
        }
    }
}
