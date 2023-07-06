const DoctorManager = require("../../models/DoctorManager");

async function deleteDoctorController(req, res) {
  const { status, message } = await DoctorManager.deleteDoctor(req.params.id);

  return res.status(status).json(message);
}

module.exports = deleteDoctorController;
