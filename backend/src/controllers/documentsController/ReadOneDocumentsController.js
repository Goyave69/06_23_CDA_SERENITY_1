const DocumentsManager = require("../../models/DocumentsManager");

async function readOneDocumentsController(req, res) {
  const { status, message } = await DocumentsManager.fetchOneDocument(req.params.id);

  return res.status(status).json(message);
}

module.exports = readOneDocumentsController;
