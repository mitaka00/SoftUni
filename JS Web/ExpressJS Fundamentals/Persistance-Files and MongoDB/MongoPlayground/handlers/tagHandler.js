const Tag = require('mongoose').model('Tag');
const formidable = require('formidable');


module.exports = (req, res) => {
  if (req.pathname === '/generateTag' && req.method === 'POST') {
      let form = new formidable.IncomingForm();

      res.writeHead(200,{
        'content-type':'text/plain'
      })

      form.parse(req,(err, fields, files)=>{
          const name = fields.tagName;
          Tag.create({
            name,
            images:[]
          }).then(()=>{
            res.writeHead(302,{
              'location':'/'
            })
            res.end();
          }).catch((err)=>{
            console.log(err)
          })
      })
  } else {
    return true
  }
}
