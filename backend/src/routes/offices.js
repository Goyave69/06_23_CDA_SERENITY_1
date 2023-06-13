const express = require('express');
const officeRouter = express.Router();
const createOfficeController = require('../controllers/officeController/CreateOfficeController')
const readOfficeController = require('../controllers/officeController/ReadOfficeController')
const readOneOfficeController = require('../controllers/officeController/ReadOneOfficeController')
const updateOfficeController = require('../controllers/officeController/UpdateOfficeController')
const deleteOfficeController = require('../controllers/officeController/DeleteOfficeController');

/* POST : create a new user. */
officeRouter.post('/', createOfficeController)

/* GET : fetch all users . */
officeRouter.get('/', readOfficeController)

/* GET : fetch one user . */
officeRouter.get('/:id', readOneOfficeController)

/* PUT : update one user . */
officeRouter.put('/:id', updateOfficeController)

/* DELETE : delete one user . */
officeRouter.delete('/:id', deleteOfficeController)

module.exports = officeRouter;