const OfficeManager = require('../../models/OfficeManager');

async function updateUserController(req, res) {
    const {status, message} = await OfficeManager.updateOffice(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateUserController;