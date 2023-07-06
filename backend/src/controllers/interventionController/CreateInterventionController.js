const InterventionManager = require('../../models/InterventionManager');

async function createInterventionController(req, res) {
    const {status, message} = await InterventionManager.insertIntervention(req.body);
    
    return res.status(status).json(message)
}

module.exports = createInterventionController;