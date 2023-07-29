const express = require('express')
const router = express.Router({ mergeParams: true })

// router.use('/auth', require('./auth.routes'))
router.use('/jewelry', require('./jewelry.routes'))
router.use('/jewelryType', require('./jewelryType.routes'))
router.use('/colors', require('./colors.routes'))
router.use('/materials', require('./materials.routes'))
router.use('/techniques', require('./techniques.routes'))

module.exports = router