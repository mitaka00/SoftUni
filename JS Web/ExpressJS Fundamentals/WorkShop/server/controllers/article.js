const Article=require('../data/Article');

module.exports.getAddArticle=(req,res)=>{
     res.render('articles/addArticle')
},

module.exports.postAddArticle=(req,res)=>{
    let articleObj = req.body;
    articleObj.author=req.user.id;
    articleObj.imagePath=`/public/images/${req.file.filename}`
    articleObj.imageForHbs=`/images/${req.file.filename}`
       
    Article.create(articleObj).then((article) => { 
        req.session.message="bachka si "

        res.redirect('/');
    })
}

module.exports.getDetails=(req,res)=>{
    let id=req.params.id
    
    Article.findById(id).then(article=>{
        res.render(`articles/details`,article)
    })
}

module.exports.delete=(req,res)=>{
    let id=req.params.id

    Article.findById(id).then((article)=>{
        if(article.author===req.user.id || req.user.roles.indexOf('Admin')>=0){
            Article.findByIdAndRemove(id).then(()=>{
                res.redirect('/');
            })
        } else{
            console.log('ne si go sazdal ti');
            res.render('articles/details',article)
        }
    })
}

module.exports.getEdit=(req,res)=>{
    let id=req.params.id;

    Article.findById(id).then((article)=>{
        if(article.author===req.user.id || req.user.roles.indexOf('Admin')>=0){
            res.render('articles/edit',article)    
        } else{
            console.log('ne si go sazdal ti');
            res.render('articles/details',article)
        }        
    })  
}

module.exports.postEdit=(req,res)=>{
    let id=req.params.id;
    let editedArticle=req.body;

    Article.findById(id).then((article)=>{
        if(article.author===req.user.id || req.user.roles.indexOf('Admin')>=0){
            article.title=editedArticle.title
            article.description=editedArticle.description
            if(req.file){
                article.imageForHbs=`/images/${req.file.filename}`
                article.imagePath=`/public/images/${req.file.filename}`
            }

            article.save().then(()=>{
                res.redirect('/');
            })
        } else{
            console.log('ne si go sazdal ti');
            res.render('articles/details',article)
        }        
    })  
}