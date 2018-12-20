
const Models = require('./Homes')
const imageList = require('./imageData')
// const exteriors = require('../db/z_exteriors')
// const interiors = require('../db/z_interiors')
// const fs = require('fs')

var insertAllData = function(obj) {
    var descriptionLines = obj.Description.split('.')
    var homeId = 0;
    var saveIntsExts = (arr) => {
        for(var j = 0; j < arr.length; j++){
            if(arr.length > 100 && i % 4 === 0) {
                homeId += 1
            } else {
                homeId += 1
            };
            var instance = new Models.imageModel({
                image: arr[j].image_path,
                description: descriptionLines[j],
                type: arr[j].type,
                homeId: homeId
            })
            instance.save((err)=>{
                if(err){
                    console.log(err)
                }
            })
        }
    }
    saveIntsExts(obj.interiors)
    saveIntsExts(obj.exteriors)   
};

insertAllData(imageList);