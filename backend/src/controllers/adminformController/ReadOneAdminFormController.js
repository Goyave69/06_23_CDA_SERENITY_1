const AdminFormManager = require('../../models/AdminFormManager');

async function readOneAdminFormController(req, res) {
    const {status, message} = await AdminFormManager.fetchOneAdminForm(req.params.id);
    return res.status(status).json(message)
}

module.exports = readOneAdminFormController;