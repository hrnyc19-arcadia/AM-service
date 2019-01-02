var imageModel = require('./Homes')

module.exports = {
    getAllPhotos: (home, callback)=>{
        imageModel.find({homeId: home.homeId}, callback)  
    },

    saveFave: (home, callback) => {
        imageModel.findOneAndUpdate({homeId: home.homeId}, {saveListName: home}, callback)
    }
}
