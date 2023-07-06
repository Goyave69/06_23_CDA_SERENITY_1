const express = require('express');
const router = express.Router();
const createPatientController = require('../controllers/patientController/CreatePatientController')
const readPatientController = require('../controllers/patientController/ReadPatientController')
const readOnePatientController = require('../controllers/patientController/ReadOnePatientController')
const updatePatientController = require('../controllers/PatientController/UpdatePatientController')
const deletePatientController = require('../controllers/PatientController/DeletePatientController');

/* POST : create a new Patient. */
router.post('/', createPatientController) 

/* GET : fetch all Patients . */
router.get('/', readPatientController)

/* GET : fetch one Patient . */
router.get('/:id', readOnePatientController)

/* PUT : update one Patient . */
router.put('/:id', updatePatientController)

/* DELETE : delete one Patient . */
router.delete('/:id', deletePatientController)

module.exports = router;