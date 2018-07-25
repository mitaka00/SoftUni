const handlers = require('../controllers')
const multer = require('multer');
const auth=require('./auth');

let upload = multer({dest:'./content/images'})

module.exports = (app)=>{
    app.get('/',handlers.home.index);

    app.get('/product/add',auth.isAuthenticated,handlers.product.addGet);
    app.post('/product/add',auth.isAuthenticated,upload.single('image'),handlers.product.addPost);

    app.get('/category/add',auth.isAuthenticated,handlers.category.addGet);
    app.post('/category/add',auth.isAuthenticated,handlers.category.addPost);

    app.get('/category/:category/products',auth.isAuthenticated,handlers.category.productByQuery);

    app.get('/product/edit/:id',auth.isAuthenticated,handlers.product.getEdit);
    app.post('/product/edit/:id',auth.isAuthenticated,upload.single('image'),handlers.product.editPost);

    app.get('/product/delete/:id',auth.isAuthenticated,handlers.product.deleteGet);
    app.post('/product/delete/:id',auth.isAuthenticated,handlers.product.deletePost);

    app.get('/product/buy/:id',auth.isAuthenticated,handlers.product.getBuy);
    app.post('/product/buy/:id',auth.isAuthenticated,handlers.product.buyPost);

    app.get('/user/register',handlers.user.registerGet);
    app.post('/user/register',handlers.user.registerPost);

    app.get('/user/login',handlers.user.loginGet);
    app.post('/user/login',handlers.user.loginPost);

    app.post('/user/logout',auth.isAuthenticated,handlers.user.logout);
}