const express = require('express')
const Materials = require('../models/Materials')
const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
  try {
    const list = await Materials.find()
    res.status(200).send(list)
  } catch (e) {
    res.status(500).json({
      message: 'Ошибка на сервере'
    })
  }
})

module.exports = router