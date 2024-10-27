const express = require('express')
const router = express.Router()
const createController = require('../controllers/createController')

// GET /create
router.get('/calendar/create', createController.getCreate)

// POST /create
router.post('/', createController.createCreate)

module.exports = router
