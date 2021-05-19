var express = require('express');
var app = express();
const path = require('path')
const filePath = './data.json'
const fullPathToFile = path.join(__dirname, filePath)
const data = require(filePath)
const cors = require('cors');
app.use(cors());
app.get('/api/v1/items', (req, res) => {
  return res.json(data)
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
  

  