const Book=require('../data/Book');

module.exports={
    getAddBook:(req,res)=>{
        res.render('books/addBook')
    },
    postAddBook:(req,res)=>{
        let book=req.body;

        if(!book.title || !book.poster){
           book.err=true;
           res.render('books/addBook',book)
        }

        book.year=new Date(book.year);
        console.log(book)

        Book.create(book).then(()=>{
            res.redirect('/');
        })
    },
    viewAll:(req,res)=>{
        Book.find().sort('-year').then(books=>{
            res.render('books/getAllBooks', {books})
        })
    },
    getDetails:(req,res)=>{
        let id=req.params.id;

        Book.findById(id).then(book=>{
            res.render('books/details',book)
        })
    }
}