const AdminFormManager = require('../../models/AdminFormManager');

async function deleteAdminFormController(req, res) {
    const {status, message} = await AdminFormManager.deleteAdminForm(req.params.id);
    
    return res.status(status).json(message)
}

module.exports = deleteAdminFormController;