const InterventionManager = require('../../models/InterventionManager');
const qs = require('qs')

async function readInterventionController(req, res) {
    const {status, message} = Object.keys(req.query).length === 0 ? await InterventionManager.fetchIntervention() : await InterventionManager.fetchInterventionBy(qs.parse(req.query));
    
    return res.status(status).json(message)
}

module.exports = readInterventionController;