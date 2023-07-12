const TagsJewelry = require('../models/TagsJewelry');
const ColorsJewelry = require('../models/ColorsJewelry');

const tagsJewelryMock = require('../mock/tagsJewelry.json');
const colorsJewelryMock = require('../mock/colorsJewelry.json');

module.exports = async () => {
  const tags = await TagsJewelry.find()
  if (tags.length !== tagsJewelryMock.length) {
    await createInitialEntity(TagsJewelry, tagsJewelryMock)
  }

  const colors = await ColorsJewelry.find()
  if (colors.length !== colorsJewelryMock.length) {
    await createInitialEntity(ColorsJewelry, colorsJewelryMock)
  }
}

async function createInitialEntity(Model, data) {
  await Model.collection.drop()
  return Promise.all(
   data.map(async item => {
    try {
      delete item._id
      const newItem = new Model(item)
      await newItem.save()
      return newItem
    } catch (e) {
      return e
    }
   }) 
  )
}