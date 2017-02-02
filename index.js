var express = require('express')
var app = express()
var uuidV4 = require('uuid/v4');

var port = process.env.PORT || 3000;

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  var message = 'hello world, have a uuid: ' + uuidV4()
  res.render('index', { title: 'Hey', heading: 'It\'s demo time', message: message })
})

app.get('/kafka', function (req, res) {
  //TODO do kafka things
})

app.listen(port)
