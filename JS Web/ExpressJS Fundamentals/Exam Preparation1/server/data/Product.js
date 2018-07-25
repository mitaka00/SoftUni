const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    category:{type:String,required:true},
    size:{type:Number, max:24, min:17,required:true},
    imageUrl:{type:String, required:true},
    toppings:{type:[String], default:[]}
});

mongoose.model('Product',productSchema);

module.exports=mongoose.model('Product')