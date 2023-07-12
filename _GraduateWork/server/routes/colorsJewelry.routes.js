const express = require('express')
const ColorsJewelry = require('../models/ColorsJewelry')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await ColorsJewelry.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router