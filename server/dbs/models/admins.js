const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  pwd: {
    type: String,
    required: true
  }
})

module.exports = {
  Admin: mongoose.model('admin', adminSchema)
}