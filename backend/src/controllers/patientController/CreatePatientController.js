const PatientManager = require('../../models/PatientManager');

async function createPatientController(req, res) {
    const {status, message} = await PatientManager.insertPatient(req.body);
    
    return res.status(status).json(message)
}

module.exports = createPatientController; 