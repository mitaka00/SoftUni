const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String},
    year:{type:Date,required:true},
    poster:{type:String,required:true}
});

mongoose.model('Book',bookSchema);

module.exports=mongoose.model('Book')