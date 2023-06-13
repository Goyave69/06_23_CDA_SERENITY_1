const express = require('express');
const router = express.Router();
const createUserController = require('../controllers/userController/CreateUserController')
const readUserController = require('../controllers/userController/ReadUserController')
const readOneUserController = require('../controllers/userController/ReadOneUserController')
const updateUserController = require('../controllers/userController/UpdateUserController')
const deleteUserController = require('../controllers/userController/DeleteUserController');

/* POST : create a new user. */
router.post('/', createUserController)

/* GET : fetch all users . */
router.get('/', readUserController)

/* GET : fetch one user . */
router.get('/:id', readOneUserController)

/* PUT : update one user . */
router.put('/:id', updateUserController)

/* DELETE : delete one user . */
router.delete('/:id', deleteUserController)

module.exports = router;