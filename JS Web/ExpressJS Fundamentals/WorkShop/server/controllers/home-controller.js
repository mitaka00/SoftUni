const Article=require('../data/Article');

module.exports.index=(req,res)=>{
  Article.find().then((articles)=>{
    res.render('index',{articles});
  })
}
module.exports.about =(req,res)=>{
  res.render('home/about');
}
