
const Models = require('./Homes')
const ImageList = require('../imageData')
// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
//REFACTOR! types array won't insert into db changes type to types here is that why?
//refactor check require statement and save statement, also setting array
var insertAllData = function(obj) {
    for(var i = 0; i < 100; i++){
        var DescriptionLines = obj.Description.split('.')
        var instance = new Models.Image({
            image: obj.ImageData[i].post_url,
            description: DescriptionLines[i]
        })
        instance.save((err)=>{
            if(err){
                console.log(err)
            }
        })
    };
};

insertAllData(ImageList)