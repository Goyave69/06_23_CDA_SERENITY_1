const DoctorManager = require("../../models/DoctorManager");

async function createDoctorController(req, res) {
  const { status, message } = await DoctorManager.insertDoctor(req.body);

  return res.status(status).json(message);
}

module.exports = createDoctorController;
