const PatientManager = require('../../models/PatientManager');

async function readOnePatientController(req, res) {
    const {status, message} = await PatientManager.fetchOnePatient(req.params.id);
    return res.status(status).json(message)
}

module.exports = readOnePatientController;