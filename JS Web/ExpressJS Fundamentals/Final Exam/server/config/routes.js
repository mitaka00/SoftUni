const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', controllers.users.logout)

  app.get('/articles/addArticle',auth.isAuthenticated,controllers.articles.getAddArticle)
  app.post('/articles/addArticle',auth.isAuthenticated,controllers.articles.postAddArticle)

  app.get('/articles/allArticles',controllers.articles.getAllArticles)

  app.get('/articles/displayArticle/:id',controllers.articles.displayArticle)

  app.get('/articles/editArticle/:id',auth.isAuthenticated,controllers.articles.getEditArticle)
  app.post('/articles/editArticle/:id',auth.isAuthenticated,controllers.articles.postEditArticle)

  app.get('/articles/getLatestArticle',controllers.articles.getLatestArticle)

  app.get('/articles/lock/:id',auth.isAuthenticated,controllers.articles.lockArticle)
  app.get('/articles/unlock/:id',auth.isAuthenticated,controllers.articles.unlockArticle)

  app.post('/search',controllers.articles.search)

  app.get('/articles/history/:id',auth.isAuthenticated,controllers.articles.history)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
