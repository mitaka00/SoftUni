const controllers = require('../controllers')
const auth = require('./auth')

const multer=require('multer');
let upload=multer({dest:'./public/images'})

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/about', auth.isAuthenticated, controllers.home.about)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.post('/users/logout', controllers.users.logout)

  app.get('/articles/addArticle',auth.isAuthenticated,controllers.article.getAddArticle);
  app.post('/articles/addArticle',auth.isAuthenticated,upload.single('imagePath'),controllers.article.postAddArticle);

  app.get('/articles/details/:id',auth.isAuthenticated,controllers.article.getDetails);

  app.get('/articles/delete/:id',auth.isAuthenticated,controllers.article.delete);

  app.get('/articles/edit/:id',auth.isAuthenticated,controllers.article.getEdit);
  app.post('/articles/edit/:id',auth.isAuthenticated,upload.single('imagePath'),controllers.article.postEdit);

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
