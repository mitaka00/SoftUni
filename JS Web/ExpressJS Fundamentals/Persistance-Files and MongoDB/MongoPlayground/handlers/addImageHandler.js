const Image = require('mongoose').model('Image');
const TAG = require('mongoose').model('Tag');
const formidable = require('formidable');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

function deleteImg(req,res){
  Image.findByIdAndRemove(req.pathquery.id).then((image)=>{
   
    
    TAG.update({ _id: { $in: image.tags } }, 
      { $pull: { images: image._id } }, 
      { multi: true }).then(()=>{
        res.writeHead(302,{
          'location':'/'
        })
        res.end()
    })



   
  }).catch((err)=>{
    console.log(err)
  })
}

function addImage(req,res){
      let form = new formidable.IncomingForm();

      

      form.parse(req,(err, fields, files)=>{
          if(err){
            throw err
          }
          let ids = fields.tagsId.split(',').reduce((p,c,i,a)=>{
              if(p.includes(c)||c.length === 0){
                return p;
              }else{
                p.push(c);
                return p;
              }
          },[]).map(ObjectId)
          const image = {
            url: fields.imageUrl,
            description: fields.description,
            tags: ids
          }

          Image.create(image).then((image)=>{

            TAG.update({ _id: { $in: image.tags } }, 
              { $push: { images: image._id } }, 
              { multi: true }).then(()=>{
                res.writeHead(302,{
                  'location':'/'
                })
                res.end()
              })


              
              
          }).catch((err)=>{
            console.log(err)
          })
      })
}
