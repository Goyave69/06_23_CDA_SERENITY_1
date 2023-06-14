const OfficeManager = require('../../models/OfficeManager');

async function deleteOfficeController(req, res) {
    const {status, message} = await OfficeManager.deleteOffice(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteOfficeController;