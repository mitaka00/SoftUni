const homeHandler=require('../handlers/homeHandler');
const bookHandler=require('../handlers/bookHandler');

module.exports=(app)=>{
    app.get('/',homeHandler.getIndex);

    app.get('/addbook',bookHandler.getAddBook);
    app.post('/addbook',bookHandler.postAddBook);

    app.get('/viewAllBooks',bookHandler.viewAll);

    app.get('/details/:id',bookHandler.getDetails)
}