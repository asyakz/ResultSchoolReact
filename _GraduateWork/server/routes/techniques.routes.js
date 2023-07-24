const express = require('express')
const Techniques = require('../models/Techniques')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Techniques.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router