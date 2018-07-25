const home = require('./home-controller')
const users = require('./users-controller')
const articles=require('./article');

module.exports = {
  home: home,
  users: users,
  articles:articles
}
