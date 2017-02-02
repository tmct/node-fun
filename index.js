var express = require('express')
var app = express()
var uuidV4 = require('uuid/v4');

app.get('/', function (req, res) {
  res.send('hello world, have a uuid: ' + uuidV4())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
