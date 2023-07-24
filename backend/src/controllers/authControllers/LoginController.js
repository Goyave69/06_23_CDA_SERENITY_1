const AuthManager = require("../../models/AuthManager");
const { jwtGenerator } = require("../../services/LoginHelper");
const { passwordVerification } = require("../../services/PasswordHelper");

async function tokenGeneration(req, res) {
  const { email, password } = req.body;
  console.log(req.body)

  AuthManager.findOneByEmail(email).then(async ([rows]) => {
    console.log(rows)
    if (rows.length === 0) {
      res.sendStatus(404);
    }
    if (!(await passwordVerification(rows[0].password, password))) {
    //   console.info(rows[0].password);
    //   res.status(401).json("email or password is wrong")
    console.log("Password Verification Result:", await passwordVerification(rows[0].password, password));
    return res.status(401).json("Wrong password or email");
    }
    const token = jwtGenerator(rows[0].id)
    console.warn(token)
    res.cookie("token", token, {
        httpOnly: true
    })
    .status(200).json("login successful");
  })
  .catch((error) => {
    console.error(error)
    res.sendStatus(500)
  })
}

async function logoutController(req, res) {
  return res.clearCookie("token").status(200).json("Successfully logged out");
}

module.exports = {
  tokenGeneration,
  logoutController,
};
