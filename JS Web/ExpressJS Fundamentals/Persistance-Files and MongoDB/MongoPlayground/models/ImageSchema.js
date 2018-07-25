const mongoose = require('mongoose');


const imageSchema = new mongoose.Schema({
    url:{ type: mongoose.SchemaTypes.String,required: true},
    description:{ type: mongoose.SchemaTypes.String},
    creationDate: { type: mongoose.SchemaTypes.Date,required: true,default:Date.now},
    tags: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Tag'}]
})

module.exports = mongoose.model('Image',imageSchema)