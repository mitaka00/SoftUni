const mongoose=require('mongoose');

const articleSchema=new mongoose.Schema({
    author:{type:String,required:true},
    creationDate:{type:Date},
    content:{type:String},
    article:{type:mongoose.Schema.Types.ObjectId,ref:'Article'}
});

mongoose.model('Edit',articleSchema);

module.exports=mongoose.model('Edit')