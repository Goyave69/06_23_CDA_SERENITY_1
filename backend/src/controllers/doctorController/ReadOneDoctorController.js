const DoctorManager = require("../../models/DoctorManager");

async function readOneDoctorController(req, res) {
  const { status, message } = await DoctorManager.fetchOneDoctor(req.params.id);

  return res.status(status).json(message);
}

module.exports = readOneDoctorController;
