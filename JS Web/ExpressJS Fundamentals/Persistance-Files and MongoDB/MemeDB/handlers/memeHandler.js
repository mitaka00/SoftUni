const fs = require('fs');
const db = require('../config/dataBase');
const path = require('path');
const formidable = require('formidable');
const shortid = require('shortid')


module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else {
    return true
  }
}

function addMeme(req, res){
  let uploadDir = '/public/memeStorage';
        let filePath = path.normalize(path.join(__dirname, `..${uploadDir}`));
        let currentIndex = '';

        fs.readdir(filePath, (err, folders) => {
            if (err) {
                console.log(err);
                return;
            }
            currentIndex = folders.length-1;
            fs.readdir(`${filePath}/${currentIndex}`, (err, files) => {
                if (err) {
                    console.log(err);
                    return;
                }

                if (files.length >= 10) {
                    currentIndex++;
                    fs.mkdir(`${filePath}/${currentIndex}`, (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        uploadDir += `/${currentIndex}`;
                        handleForm(uploadDir, req, res);
                    });
                } else {
                    uploadDir += `/${currentIndex}`;
                    handleForm(uploadDir, req, res);
                }
            });
        });

}

function handleForm(uploadDir, req, res) {
  const form = new formidable.IncomingForm();
  let files = [];
  let fields = {};

  fields['id'] = shortid.generate();
  fields['dateStamp'] = Date.now();

  let filePath = uploadDir;
  form.uploadDir = path.normalize(path.join(__dirname, `..${uploadDir}`));
  form.keepExtensions = true;

  form.on('field', (field, value) => {
      fields[field] = value;
  });

  form.on('fileBegin', (name, file) => {
      let fileName = `${shortid.generate()}.${file.name.split('.')[1]}`;
      fields['memeSrc'] = `${filePath}/${fileName}`;
      file.path = `${form.uploadDir}/${fileName}`;
  });

  form.on('file', (field, file) => {
      files.push([field, file]);
  });

  form.on('end', () => {
    db.add(fields);
    db.save().then(()=>{
      res.writeHead(302,{
        'location':'/'
      })
      res.end();
    })
    
      
  });

  form.parse(req);
}



function getDetails(req,res){
  let id = req.pathname.split('/')[2];
  let filePath = path.normalize(path.join(__dirname, '../views/details.html'));
    let targetedMeme = db.getById(id);
    console.log(targetedMeme);

    let content = `<div class="content">
    <img src="${targetedMeme.memeSrc}" alt=""/>
    <h3>Title  ${targetedMeme.title}</h3>
    <p> ${targetedMeme.description}</p>
    <button><a href="${targetedMeme.memeSrc}">Download Meme</a></button>
    </div>
`
fs.readFile(filePath,'utf-8',(err,data)=>{
  if(err){
    console.log(err)
    return
  }

  
  let html = data.replace('<div id="replaceMe">{{replaceMe}}</div>',content)

  res.writeHead(200,{
    'content-type':'text/html'
  })
  res.write(html);
  res.end();

})

}

function viewAddMeme(req,res){
  let filePath = path.normalize(path.join(__dirname, '../views/addMeme.html'));

  
  fs.readFile(filePath,'utf-8',(err,data)=>{
    if(err){
      console.log(err)
      return
    }

    
    
    res.writeHead(200,{
      'content-type':'text/html'
    })
    res.write(data);
    res.end();

})
}

function viewAll(req, res){
    let filePath = path.normalize(path.join(__dirname, '../views/viewAll.html'));
        
    let content = '';
    let memes = db.getDb().sort((a,b)=>b.dateStamp-a.dateStamp).filter(a=>a.privacy==='on');
   
    for(let meme of memes){
      content += `<div class="meme">
                    <a href="/getDetails/${meme.id}"><img class="memePoster" src="${meme.memeSrc}"></img></a>
                    
                  </div>`;
    }

    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
          console.log(err)
          return
        }

        console.log(content)
        let html = data.replace('<div id="replaceMe">{{replaceMe}}</div>',content)

        res.writeHead(200,{
          'content-type':'text/html'
        })
        res.write(html);
        console.log(html)
        res.end();

    })
       
        

}
