const Article=require('../data/Article');
const Edit=require('../data/Edit');

module.exports.getAddArticle=(req,res)=>{
     res.render('articles/addArticle')
},

module.exports.postAddArticle=(req,res)=>{
   let articleObj={
       title:req.body.title,
       lockedStatus:false
   }

   Article.create(articleObj).then((currentArticle)=>{
       console.log(currentArticle)
    let editObj={
        author:req.user.id,
        creationDate:Date.now(),
        content:req.body.content,
        article:currentArticle._id
    }

    Edit.create(editObj).then((currentEdit)=>{

        currentArticle.edits.push(currentEdit._id);
        currentArticle.save();

        req.session.message="You created article!!!"
        res.redirect('/');
    })
   })
}

module.exports.getAllArticles=(req,res)=>{
    Article.find({}).then((articles)=>{
        articles=articles.sort((a,b)=>a.title.localeCompare(b.title))
        res.render('articles/allArticles',{articles})
    })
}

module.exports.displayArticle=(req,res)=>{
    let id=req.params.id;

    Article.findById(id).populate('edits').then((article)=>{
        article.content=article.edits.pop().content;

        res.render('articles/displayArticle',article)
    })
}

module.exports.getEditArticle=(req,res)=>{
    let id=req.params.id;

    Article.findById(id).populate('edits').then((article)=>{
        if(article.lockedStatus===false || req.user.roles.indexOf('Admin')>=0){
        let lastEdit=article.edits.pop()

        res.render('articles/editArticle',{article,lastEdit})
        } else{
            req.session.error="You don't have permission"
        return res.redirect('/');
        }
    })
}

module.exports.postEditArticle=(req,res)=>{
    let id=req.params.id;

   Article.findById(id).then((article)=>{
       if(article.lockedStatus===false || req.user.roles.indexOf('Admin')>=0){
        let editObj={
            content:req.body.content,
            creationDate:Date.now(),
            author:req.user.username,
            article:id
        };

        Edit.create(editObj).then((currentEdit)=>{
            article.edits.push(currentEdit._id);

            article.save();

            req.session.message="You edited article!!!"
            return res.redirect(`/articles/allArticles`)
            })
        } else{
            return res.redirect('/articles/allArticles')
       }
   })
}

module.exports.getLatestArticle=(req,res)=>{
    Article.find().populate('edits').then((articles)=>{
        let lastArticle=articles.pop();
        lastArticle.content=lastArticle.edits.pop().content;

        res.render('articles/displayArticle',lastArticle)
    })
}

module.exports.lockArticle=(req,res)=>{
    let id=req.params.id;

    if(req.user.roles.indexOf('Admin')>=0){
    Article.findById(id).then((article)=>{
        article.lockedStatus=true;
        article.save();

        req.session.message="Article is locked!"
        return res.redirect('/');
    }) 

    }else{
        req.session.error="You don't have permission"
        return res.redirect('/');
    }
}

module.exports.unlockArticle=(req,res)=>{
    let id=req.params.id;

    if(req.user.roles.indexOf('Admin')>=0){
    Article.findById(id).then((article)=>{
        article.lockedStatus=false;
        article.save();

        req.session.message="Article is unlocked!"
        return res.redirect('/');
    }) 

    }else{
        req.session.error="You don't have permission"
        return res.redirect('/');
    }
}

module.exports.search=(req,res)=>{
    let searchedText=req.body.searchedTitle;

    Article.find().populate('edits').then((articles)=>{
        articles=articles.filter((x)=>x.title.toLowerCase().includes(searchedText))

        res.render('articles/allArticles',{articles})
    })
}

module.exports.history=(req,res)=>{
    res.render('articles/history')
}