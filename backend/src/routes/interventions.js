const express = require('express');
const router = express.Router();
const createInterventionController = require('../controllers/InterventionController/CreateInterventionController')
const readInterventionController = require('../controllers/InterventionController/ReadInterventionController')
const readOneInterventionController = require('../controllers/InterventionController/ReadOneInterventionController')
const updateInterventionController = require('../controllers/InterventionController/UpdateInterventionController')
const deleteInterventionController = require('../controllers/InterventionController/DeleteInterventionController');

//dont forget to check the sentences 

/* POST : create a new Intervention. */
router.post('/', createInterventionController)

/* GET : fetch all Interventions . */
router.get('/', readInterventionController)

/* GET : fetch one Intervention . */
router.get('/:id', readOneInterventionController)

/* PUT : update one Intervention . */
router.put('/:id', updateInterventionController)

/* DELETE : delete one Intervention . */
router.delete('/:id', deleteInterventionController)

module.exports = router;