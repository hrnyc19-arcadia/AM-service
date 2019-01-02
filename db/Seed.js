
const imageModel = require('./Homes');
const imageList = require('./imageData');
// const exteriors = require('../db/z_exteriors')
// const interiors = require('../db/z_interiors')


var insertAllData = function(obj) {
    var descriptionLines = obj.Description.split('.')
    var saveIntsExts = (arr) => {
        var homeId = 0;
        var type = arr.length > 100 ? 'interior' : 'exterior'
        for(var j = 0; j < arr.length; j++){
            if(type === 'interior' && j % 4 === 0) {
                homeId += 1
            } else if (type === 'exterior') {
                homeId += 1
            };
            //check if formatting for filepath correct
            var instance = new imageModel({
                homeId: homeId,
                image: 'homeImages/' + arr[j],
                description: descriptionLines[j],
                type: type,
                saveListName: '_'
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