const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

// GET /main
router.get('/', mainController.getMain)

// POST /main
router.post('/', mainController.createMain)

module.exports = router
