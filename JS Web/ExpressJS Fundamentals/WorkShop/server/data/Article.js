const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String},
    imagePath:{type:String},
    imageForHbs:{type:String}
});

mongoose.model('Article',articleSchema);

module.exports=mongoose.model('Article')