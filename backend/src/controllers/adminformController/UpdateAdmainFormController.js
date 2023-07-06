const AdminFormManager = require('../../models/AdminFormManager');

async function updateAdminFormController(req, res) {
    const {status, message} = await AdminFormManager.updateAdminForm(req.params.id, req.body);
    
    return res.status(status).json(message)
}

module.exports = updateAdminFormController;