const DocumentsManager = require("../../models/DocumentsManager");

async function deleteDocumentsController(req, res) {
  const { status, message } = await DocumentsManager.deleteDocument(req.params.id);

  return res.status(status).json(message);
}

module.exports = deleteDocumentsController;
