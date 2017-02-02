var express = require('express')
var app = express()
var uuidV4 = require('uuid/v4');

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  var message = 'hello world, have a uuid: ' + uuidV4()
  res.render('index', { title: 'Hey', heading: 'It\'s demo time', message: message })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
