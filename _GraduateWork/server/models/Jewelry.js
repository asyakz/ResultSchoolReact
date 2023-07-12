const { Schema, model } = require('mongoose')

const schema = new Schema({
  photo : {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'TagsJewelry'
  }],
  colors: [{
    type: Schema.Types.ObjectId,
    ref: 'ColorsJewelry'
  }],
  bookmark: {
    type: String,
    enum: [false, true]}
}, {
  timestamps: true
})

module.exports = model('Jewelry', schema)