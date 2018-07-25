const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    title:{type:String,required:true},
    lockedStatus:{type:Boolean},
    edits:[{type:mongoose.Schema.Types.ObjectId,ref:'Edit',default:[]}],
});

mongoose.model('Article',articleSchema);

module.exports=mongoose.model('Article')