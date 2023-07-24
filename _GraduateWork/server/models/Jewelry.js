const { Schema, model } = require('mongoose')

const schema = new Schema({
  photo : {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  jewelryType: {
    type: Schema.Types.ObjectId,
    ref: 'jewelryType'
  },
  price: {
    type: Number,
    required: true
  },
  techniques: [{
    type: Schema.Types.ObjectId,
    ref: 'Techniques'
  }],
  materials: [{
    type: Schema.Types.ObjectId,
    ref: 'Materials'
  }],
  colors: [{
    type: Schema.Types.ObjectId,
    ref: 'Colors'
  }],
  description: {
    type: String,
  },
  bookmark: {
    type: String,
    enum: [false, true]}
}, {
  timestamps: true
})

module.exports = model('Jewelry', schema)