
const mongoose = require('mongoose')
if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI)
  } else{
    mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true });
  }

  var db = mongoose.connection;
  const Schema = mongoose.Schema


var UserSchema = new Schema({
    savedHomes: [Number]
})

var ImageSchema = new Schema({
    imageId: Number,
    image: String,
    description: String,
    room: String,

})

var HomeSchema = new Schema({
    topImages: [imageSchema],
    homeId: Number  
})

const userModel = db.model('User', UserSchema)
const imageModel = db.model('Image',ImageSchema)
const homeModel = db.model('Home', HomeSchema)



const saveHome = (home, callback) => {
    homeModel.saveOne({homeId: home.homeId}, callback)
}

const saveImage  = (image, callback) => {
    imageModel.saveOne({imageId: image.id}, callback)
}

const saveFave = (home, callback) => {
    userModel.saveOne({}, callback)
}


module.exports = {saveHome, saveImage, saveFave}