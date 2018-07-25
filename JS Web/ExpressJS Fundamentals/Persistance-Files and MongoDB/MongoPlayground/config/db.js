const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Tag = require('./../models/TagSchema')
let Image = require('./../models/ImageSchema')

const connectionStrinng = 'mongodb://localhost:27017/mongoDBplayground';

module.exports = mongoose.connect(connectionStrinng);

