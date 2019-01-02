
const mongoose = require('mongoose')
if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI)
  } else{
    mongoose.connect('mongodb://localhost:27017/homeImages', { useNewUrlParser: true });
  }

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