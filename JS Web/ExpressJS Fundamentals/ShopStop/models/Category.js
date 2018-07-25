const mongoose = require("mongoose");

let categorySchema = mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, unique: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    creator:{type: mongoose.Schema.Types.ObjectId, ref:'User',required:true},
});

let Category = mongoose.model("Category", categorySchema);

module.exports = Category;