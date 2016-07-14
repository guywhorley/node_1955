// controller
// for dob_1955 api

var mongoose = require('mongoose')
var People = mongoose.model('People')

module.exports = {
  // index: show all
  index: function (req, res) {
    People.find(function (err, persons) {
      if (err) {
        res.send('Error getting list.')
      } else {
        // console.log('Data: ', JSON.stringify(persons))
        res.send(JSON.stringify(persons))
      }
    })
  },

  new: function (req, res) {
    var p = new People()
    p.name = req.params.name
    p.save(function (err) {
      if (err) {
        console.log('>> Error saving new dob.', p.errors['name']['message'])
        res.send('Unable to save name! ' + p.errors['name']['message'])
        return
      }
      res.redirect('/')
    })
  },

  show: function (req, res) {
    People.find({name: req.params.name}, function (err, person) {
      if (err) {
        console.log('>> Error getting records!', err.message)
        res.send('Err getting record!')
      } else { res.send(JSON.stringify(person)) }
    })
  },

  delete: function (req, res) {
    People.remove({name: req.params.name}, function (err) {
      if (err) { console.log('>> Error removing recored.', err.message)}else { res.redirect('/')}
    })
  }

} // exports
