const Image = require('mongoose').model('Image');
const Tag = require('mongoose').model('Tag');
const fs = require('fs')

module.exports = (req, res) => {
  if (req.pathname === '/search') {
    let imagesByQuerry=[];
    let obj = {}
    
    console.log(obj);

    if(req.pathquery.tagName&&req.pathquery.tagName!=='Write tags separted by ,'){
      
        const tags = req.pathquery.tagName.split(',').filter(x=>x!=='');
        
        Tag.find({name: {$in: tags}}).then(data=>{
          data.forEach(x=>{
            x.images.forEach(id=>{
              if(!imagesByQuerry.includes(id)){
                  imagesByQuerry.push(id);
              }
            })
          })
         


          Image.find({_id:{$in: imagesByQuerry}}).then(images=>{
            images = images.sort((a,b)=>b.creationDate-a.creationDate)
      
            fs.readFile('./views/results.html','utf-8',(err,data)=>{
              if(err){
                throw err
              }
              let imageHtml = '';

              if(req.pathquery.beforeDate!==''){
                images = images.filter((x)=>x.creationDate<Date.parse(req.pathquery.beforeDate))  
              }
              if(req.pathquery.afterDate!==''){
                images = images.filter((x)=>x.creationDate>Date.parse(req.pathquery.afterDate))  
               
              }

              if(req.pathquery.Limit!==''){
                  images = images.slice(0,req.pathquery.Limit);
              }
              
    
    
    
              for(let image of images){
                imageHtml+=`<fieldset id ="${image._id}"> 
                <img src="${image.url}">
                </img><p>${image.description}<p/>
                <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
                </button> 
                </fieldset>` 
                }
               data = data.replace("<div class='replaceMe'></div>",imageHtml);
                res.writeHead(200,{
                  'content-type':'text/html'
                })
                res.write(data);
                res.end();
    
            })
          })
        })
    }else{
      
      Image.find({}).then(images=>{
       images=  images.sort((a,b)=>b.creationDate-a.creationDate)
      
        fs.readFile('./views/results.html','utf-8',(err,data)=>{
          if(err){
            throw err
          }
          let imageHtml = '';

          if(req.pathquery.beforeDate!==''){
            images = images.filter((x)=>x.creationDate<Date.parse(req.pathquery.beforeDate))  
          }
          if(req.pathquery.afterDate!==''){
            images = images.filter((x)=>x.creationDate>Date.parse(req.pathquery.afterDate))  
          }

          if(req.pathquery.Limit!==''){
            images = images.slice(0,req.pathquery.Limit);
        }



          for(let image of images){
            console.log(image.creationDate)
            console.log(image.creationDate>Date.parse(req.pathquery.afterDate))
            imageHtml+=`<fieldset id ="${image._id}"> 
            <img src="${image.url}">
            </img><p>${image.description}<p/>
            <button onclick='location.href="/delete?id=${image._id}"'class='deleteBtn'>Delete
            </button> 
            </fieldset>` 
            }
           data = data.replace("<div class='replaceMe'></div>",imageHtml);
            res.writeHead(200,{
              'content-type':'text/html'
            })
            res.write(data);
            res.end();

        })
      })
    }

    
    

   
  } else {
    return true
  }
}
