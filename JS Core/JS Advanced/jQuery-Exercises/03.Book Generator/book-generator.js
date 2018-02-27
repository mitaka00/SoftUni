function createBook(selector,title,author,ISBN) {
    let bookGenerator=(function bookGenerator(){
        let id=1;
        
        return function (selector,title,author,ISBN) {
            let container=$(selector);

            let bookDiv=$(`<div>`);
            bookDiv.attr('id','book'+id);
            bookDiv.css('border','medium one');

            let titleDiv=$(`<p class="title">${title}</p>`);
            let authorDiv=$(`<p class="author">${author}</p>`);
            let isbnDiv=$(`<p class="isbn">${ISBN}</p>`);

            let select=$(`<button>Select</button>`).click(clickSelect);
            let deSelect=$(`<button>Deselect</button>`).click(clickDeselect);

            bookDiv.append(titleDiv)
                .append(authorDiv)
                .append(isbnDiv)
                .append(select)
                .append(deSelect);

            container.append(bookDiv);

            id++;
        }
    }());

    bookGenerator(selector,title,author,ISBN)
    
    function clickSelect() {
        $(this).parent().css('border','2px solid blue')
    }
    
    function clickDeselect() {
        $(this).parent().css('border','')
    }
}
