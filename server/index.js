var express = require('express')
var app = express()
var models = require('../db/Homes')
var controllers = require('../db/HomeControllers')
var bodyParser = require('body-parser')
var path = require('path')


// Your server must be able to serve up 
//the correct content by an item's ID or name (support paths like /api/items/:id or similar). This requirement affects considerations for your URL/API design.
// Each member of the team should run their server on a 
//different PORT number (e.g. 3001/2/3/4)
// Your server and database design must be the minimum design necessary to deliver content to your React app. If your server has more than 100 lines of code, you may be putting too much emphasis on your server.


app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '/../client/dist')))

app.get('/:homeId', (req, res)=>{
    var homeId = req.params.homeId
    controllers.getAllPhotos({homeId: homeId}, (err, result)=>{
        if (err){
            console.log(err)
        } else {
            res.send(result);
        }
    });
})

// app.post('/save', (req, res)=>{  
// })

app.listen(3001, () => {
    console.log('listening on port 3001')
})