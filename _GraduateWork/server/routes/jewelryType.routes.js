const express = require('express')
const JewelryType = require('../models/JewelryType')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await JewelryType.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router