const express = require('express')
const Jewelry = require('../models/Jewelry')
const router = express.Router({ mergeParams: true })

router.patch('/:jewelryId', async (req, res) => {
    const {jewelryId} = req.params
    if (jewelryId) {
      const updateJewelry = await Jewelry.findByIdAndUpdate(jewelryId, req.body, { new: true })
      res.send(updateJewelry)
    } else {
      res.status(400).json({ message: 'Ошибка запроса' })
    }
})

router.get('/', async (req, res) => {
    const list = await Jewelry.find()
    res.status(200).send(list)
})

router.get('/:jewelryId', async (req, res) => {
  const {jewelryId} = req.params
    const jewelry = await Jewelry.findById(jewelryId)
    res.status(200).send(jewelry)
})

router.delete('/:jewelryId', async (req, res) => {
  const {jewelryId} = req.params
    const jewelry = await Jewelry.findByIdAndDelete(jewelryId)
    res.status(200).send(jewelry)
})

router.post('/', async (req, res) => {
  const jewerly = req.body
  const savedJewelry = await Jewelry.create(jewerly)
  res.send(savedJewelry)
})

module.exports = router