const Article=require('../data/Article');
const Edit=require('../data/Edit');

module.exports = {
  index: (req, res) => {
    let firstArticle=''
    let threeRecentlyAdded=[]

    Article.find().populate('edits').then((articles)=>{
      firstArticle=articles.pop();
      firstArticle.content=firstArticle.edits.pop().content.split(' ').slice(0,51).join(' ');

      threeRecentlyAdded=articles.slice(Math.max(articles.length-3,0))
      res.render('home/index',{firstArticle,threeRecentlyAdded})
    })
  },
}
