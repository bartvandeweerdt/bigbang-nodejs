var mongoose = require('mongoose');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/bigbang_app');

var schema = new mongoose.Schema({
    /*
     String
     Number
     Date
     Buffer
     Boolean
     Mixed
     ObjectId
     Array
     */
    id: String,
    name: String,
    lastName: String,
    realName: String,
    profession: String,
    bio: String,
    url: String,
    imageUri: String
});

module.exports = mongoose.model('person', schema);