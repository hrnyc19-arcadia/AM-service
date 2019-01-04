var dbconfig = require('../config.js')
const mongoose = require('mongoose')

   // mongoose.connect('mongodb://localhost:27017/homeImages', { useNewUrlParser: true });
    mongoose.connect(`mongodb://${dbconfig.username}:${dbconfig.password}@ds251622.mlab.com:51622/flair-bnb-photo-carousel`);
  

  var db = mongoose.connection;
  const Schema = mongoose.Schema


var UserSchema = new Schema({
    savedHomes: [Number]
})

var ImageSchema = new Schema({
    homeId: Number,
    image: String,
    description: String,
    type: String,
    saveListName: String
})

// const userModel = db.model('User', UserSchema)
const imageModel = db.model('Image',ImageSchema)



module.exports = imageModel