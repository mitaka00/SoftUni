const fs = require('fs')
const db = require('./../config/dataBase')
const tagDb = require('./../config/tagDb')
const url = require('url')
const qs = require('querystring')
const shortid = require('shortid')
const formidable = require('formidable')

// Utils

let memeGenerator = (id, title, memeSrc, description, privacy) => {
  return {
    id: id,
    title: title,
    memeSrc: memeSrc,
    description: description,
    privacy: privacy,
    dateStamp: Date.now()
  }
}

let defaultResponse = (respString, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(respString)
}

let fieldChecker = obj => {
  for (let prop in obj) {
    if (obj[prop] === '') {
      return true
    }
  }
}
//

let viewAll = (req, res) => {
  let data = db.getDb()
  data = data
    .sort((a, b) => {
      return b.dateStamp - a.dateStamp
    })
    .filter(meme => {
      return meme.privacy === 'on'
    })

  let responseString = ''
  for (let meme of data) {
    responseString += `<div class="meme">
    <a href="/getDetails?id=${meme.id}">
    <img class="memePoster" src="${meme.memeSrc}"/>          
    </div>`
  }

  fs.readFile('./views/viewAll.html', (err, html) => {
    if (err) {
      console.log(err)
      return
    }
    html = html
      .toString()
      .replace('<div id="replaceMe">{{replaceMe}}</div>', responseString)

    defaultResponse(html, res)
  })
}

let viewAddMeme = (req, res, status = null) => {
  fs.readFile('./views/addMeme.html', (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    let genres = tagDb.getDb()
    let exitString = ''

    console.log(exitString)

    for (let genre of genres) {
      exitString += `<option value="${genre.title}">${genre.title}</option>`
    }

    if (status === 'err') {
      data = data
        .toString()
        .replace(
          '<div id="replaceMe">{{replaceMe}}</div>',
          '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>'
        )
    }
    if (status === 'suc') {
      data = data
        .toString()
        .replace(
          '<div id="replaceMe">{{replaceMe}}</div>',
          '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>'
        )
    }
    defaultResponse(
      data
        .toString()
        .replace('<div id="replaceMe">{{replaceMe2}}</div>', exitString),
      res
    )
  })
}

let getDetails = (req, res) => {
  let targetId = qs.parse(url.parse(req.url).query).id

  let targetedMeme = db.getDb().find(target => {
    return target.id === targetId
  })

  let replaceString = `<div class="content">
  <img src="${targetedMeme.memeSrc}" alt=""/>
  <h3>Title  ${targetedMeme.title}</h3>
  <p> ${targetedMeme.description}</p>
  <button><a href="${targetedMeme.posterSrc}" download="${targetedMeme.title}.jpg" >Download Meme</a></button>
  </div>`

  fs.readFile('./views/details.html', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    data = data
      .toString()
      .replace('<div id="replaceMe">{{replaceMe}}</div>', replaceString)
    defaultResponse(data, res)
  })
}

let addMeme = (req, res) => {
  let id = shortid.generate()
  let fileName = shortid.generate() + '.jpg'

  let form = new formidable.IncomingForm()

  let dirName = `./public/memeStorage/${Math.ceil(db.getDb().length / 10)}`
  let filePathName = dirName + '/' + fileName

  fs.access(dirName, err => {
    if (err) {
      fs.mkdirSync(dirName)
    }

    form.on('fileBegin', (name, file) => {
      file.path = filePathName
    })

    form.parse(req, (err, fields, files) => {
      console.log(fields)
      if (err) {
        console.log(err)
        return
      }
      if (fieldChecker(fields) || files.meme.size === 0) {
        viewAddMeme(req, res, 'err')
      } else {
        let memeForImport = memeGenerator(
          id,
          fields.memeTitle,
          filePathName,
          fields.memeDescription,
          fields.status
        )

        db.add(memeForImport)
        db.save()

        viewAddMeme(req, res, 'suc')
      }
    })
  })
}

let getSearchMeme = (req, res) => {
  fs.readFile('./views/searchMeme.html', (err, data) => {
    if (err) {
      console.log(err)
      return
    }
    let genres = tagDb.getDb()
    let exitString = '<option value="all">all</option>'

    for (let genre of genres) {
      exitString += `<option value="${genre.title}">${genre.title}</option>`
    }

    data = data
      .toString()
      .replace('<div id="replaceMe">{{replaceMe}}</div>', exitString)
    defaultResponse(data, res)
  })
}

let searchForMeme = (req, res) => {
  let data = db.getDb()
  let tags = tagDb.getDb()
  let params = req.querypath
  let title = params.memeTitle
  let selectedGenre = params.genreSelect

  let sorted = []

  if (selectedGenre !== 'all') {
    let demo = tags.find(x => {
      return x.id == selectedGenre
    })
    let arrSelection = demo.memeArr

    for (let meme of data) {
      if (arrSelection.indexOf(meme.id) !== -1) {
        sorted.push(meme)
      }
    }
  } else {
    sorted = data
  }

  if (title !== '') {
    sorted = sorted.filter(elem => {
      if (elem.title.indexOf(title) !== -1) {
        return elem
      }
    })
  }
  sorted = sorted
    .sort((a, b) => {
      return b.dateStamp - a.dateStamp
    })
    .filter(meme => {
      return meme.privacy === 'on'
    })

  let responseString = ''
  for (let meme of sorted) {
    responseString += `<div class="meme">
  <a href="/getDetails?id=${meme.id}">
  <img class="memePoster" src="${meme.memeSrc}"/>          
  </div>`
  }

  fs.readFile('./views/viewAll.html', (err, html) => {
    if (err) {
      console.log(err)
      return
    }
    html = html
      .toString()
      .replace('<div id="replaceMe">{{replaceMe}}</div>', responseString)

    defaultResponse(html, res)
  })
}

let createGenreView = (req, res) => {
  fs.readFile('./views/addGenre.html', (err, data) => {
    if (err) {
      console.log(err)
    }
    defaultResponse(data, res)
  })
}

module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else if (req.pathname === '/searchMeme' && req.method === 'GET') {
    getSearchMeme(req, res)
  } else if (req.pathname === '/sSearchMeme' && req.method === 'GET') {
    searchForMeme(req, res)
  } else if (req.pathname === '/addGenre' && req.method === 'GET') {
    createGenreView(req, res)
  }else if (req.pathname === '/aaddGenre' && req.method === 'GET') {
    console.log(req.querypath)
    createGenreView(req, res)
  } else {
    return true
  }
}
