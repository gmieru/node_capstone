const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

// GET /login
router.get('/', loginController.getLogin)

// POST /login
router.post('/', loginController.createLogin)




module.exports = router
