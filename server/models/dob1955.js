// model schema and validation
var mongoose = require('mongoose')

// define the Schema
var PeopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Name must be two character or more.'],
    maxlength: [15, 'Name cannot be longer than 15 characters']
  }
})

// compile the schema into a model
var People = mongoose.model('People', PeopleSchema)
