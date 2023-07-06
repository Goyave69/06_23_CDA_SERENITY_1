const DoctorManager = require("../../models/DoctorManager");

async function updateDoctorController(req, res) {
  const { status, message } = await DoctorManager.updateDoctor(
    req.params.id,
    req.body
  );

  return res.status(status).json(message);
}

module.exports = updateDoctorController;
