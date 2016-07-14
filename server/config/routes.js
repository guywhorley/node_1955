// Route Handlers

// require controller
var people = require('../controllers/dob_1955.js')

module.exports = function (app) {

  // index
  app.get('/', function (req, res) {
    people.index(req, res)
  })

  // add new
  app.get('/new/:name/', function (req, res) {
    people.new(req, res)
  })

  // show
  app.get('/:name', function (req, res) {
    people.show(req, res)
  })

  // delete
  app.get('/remove/:name/', function (req, res) {
    people.delete(req, res)
  })
} // module
