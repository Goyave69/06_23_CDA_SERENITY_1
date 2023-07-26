const AuthManager = require("../../models/AuthManager");
const { jwtGenerator } = require("../../services/LoginHelper");
const { passwordVerification } = require("../../services/PasswordHelper");

const { createCookie } = require("../../services/cookieHelper");

async function tokenGeneration(req, res) {
  const { email, password } = req.body;

  AuthManager.findOneByEmail(email)
    .then(async ([rows]) => {
      const user = rows[0];
      if (rows.length === 0) {
        return res.sendStatus(404);
      }

      if (!(await passwordVerification(rows[0].password, password))) {
        return res.status(401).json("Wrong password or email");
      }

      const token = jwtGenerator(rows[0].id);
      let message = { message: "login succesfull", roles: rows[0].roles };

      return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true
      })
        .cookie("user", user, {
          httpOnly: false,
          sameSite: "None",
          secure: true,
        })
        .status(201)
        .json(message);
    })
    .catch((error) => {
      console.error(error);
      return res.sendStatus(500);
    });
}

async function logoutController(req, res) {
  // Supprimez le cookie "token" côté backend
  deleteCookie(res, "token");
  return res.status(200).json("Successfully logged out");
}

module.exports = {
  tokenGeneration,
  logoutController,
};
