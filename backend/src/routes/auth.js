const express = require('express');
const router = express.Router();
const loginController = require('../controllers/authControllers/LoginController');

/* POST : login a user. */
router.post('/login', loginController.tokenGeneration)

module.exports = router;