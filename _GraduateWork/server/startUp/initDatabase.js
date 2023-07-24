const Techniques = require('../models/Techniques');
const Materials = require('../models/Materials');
const Colors = require('../models/Colors');
const JewelryType = require('../models/JewelryType');

const techniquesMock = require('../mock/techniques.json')
const materialsMock = require('../mock/materials.json');
const jewelryTypeMock = require('../mock/jewelryType.json');
const colorsMock = require('../mock/colors.json');

module.exports = async () => {
  const jewelryType = await JewelryType.find()
  if (jewelryType.length !== jewelryTypeMock.length) {
    await createInitialEntity(JewelryType, jewelryTypeMock)
  }

  const techniques = await Techniques.find()
  if (techniques.length !== techniquesMock.length) {
    await createInitialEntity(Techniques, techniquesMock)
  }

  const colors = await Colors.find()
  if (colors.length !== colorsMock.length) {
    await createInitialEntity(Colors, colorsMock)
  }

  const materials = await Materials.find()
  if (materials.length !== materialsMock.length) {
    await createInitialEntity(Materials, materialsMock)
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