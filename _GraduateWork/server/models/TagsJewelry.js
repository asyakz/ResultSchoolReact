  const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  rus: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = model('TagsJewelry', schema)