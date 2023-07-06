const DoctorManager = require("../../models/DoctorManager");
const qs = require("qs");

async function readDoctorController(req, res) {
  const { status, message } =
    Object.keys(req.query).length === 0
      ? await DoctorManager.fetchDoctor()
      : await DoctorManager.fetchDoctorBy(qs.parse(req.query));

  return res.status(status).json(message);
}

module.exports = readDoctorController;
