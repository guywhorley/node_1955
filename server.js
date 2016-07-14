// === configuration ===
var express = require('express')
var app = express()

// body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

var path = require('path')

// don't need method-override since no put or delete
// don't need ejs since no templates being served up

// === database ===
require('./server/config/mongoose.js')

// === routes ===
var routes_setter = require('./server/config/routes.js')
routes_setter(app)

// === listen ===
app.listen(8000, function () {
  console.log('>> Listening on port 8000')
})
