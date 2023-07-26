const express = require('express')
const Colors = require('../models/Colors')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Colors.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router