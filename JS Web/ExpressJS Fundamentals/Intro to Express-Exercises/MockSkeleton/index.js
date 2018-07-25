const http = require('http')
const url = require('url')
const qs = require('querystring')
const handlers = require('./handlers/handlerBlender')
const db = require('./config/dataBase')
const dbTag = require('./config/tagDb')
const port = 2323

dbTag
  .load()
  .then(() => {
    db.load().then(() => {
      http
        .createServer((req, res) => {
          for (let handler of handlers) {
            req.pathname = url.parse(req.url).pathname
            req.querypath = qs.parse(url.parse(req.url).query)
            let task = handler(req, res)
            if (task !== true) {
              break
            }
          }
        })
        .listen(port)
      console.log('Im listening on ' + port)
    })
  })
  .catch(() => {
    console.log('Failed to load DB')
  })
