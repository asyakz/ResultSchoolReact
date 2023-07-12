const express = require('express')
const router = express.Router({ mergeParams: true })

router.use('/auth', require('./auth.routes'))
router.use('/jewelry', require('./jewelry.routes'))
router.use('/colorsJewelry', require('./colorsJewelry.routes'))
router.use('/tagsJewelry', require('./tagsJewelry.routes'))
router.use('/user', require('./user.routes'))

module.exports = router