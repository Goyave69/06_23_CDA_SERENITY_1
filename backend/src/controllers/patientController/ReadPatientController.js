const PatientManager = require('../../models/PatientManager');
const qs = require('qs')

async function readPatientController(req, res) {
    const {status, message} = Object.keys(req.query).length === 0 ? await PatientManager.fetchPatient() : await PatientManager.fetchPatientBy(qs.parse(req.query));
    
    return res.status(status).json(message)
}

module.exports = readPatientController;