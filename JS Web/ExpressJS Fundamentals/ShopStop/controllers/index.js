const homeHandler = require('./home.js');

const productHandler  = require('./product.js');
const categoryHandler = require('./category.js')
const userHandler=require('./user.js');

module.exports = { home:homeHandler, product:productHandler,category:categoryHandler,user:userHandler };