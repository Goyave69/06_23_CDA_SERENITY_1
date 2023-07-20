const connection = require("./index");
const {passwordVerification} = require('../services/PasswordHelper');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const privateKey = fs.readFileSync('jwtRS256.key');
const { passwordHasher } = require("../services/PasswordHelper");
 
async function login({email, password}) {
let hashed = await passwordHasher(password);
	console.log(email, password, hashed)
    return connection.promise().query('SELECT * FROM user WHERE email = ?', [email])
        .then(async ([rows]) => {

			console.log("row", rows)
            if (rows.length === 0) {
				console.log("1")
                return {status: 401, message: 'Email or password is wrong'}
            }
            if (!await passwordVerification(hashed, rows[0].password)) {
				console.log("2")
                return {status: 401, message: 'Email or password is wrong'}
            }

            const token = jwt.sign({ userId: rows[0].id }, privateKey, { algorithm: 'RS256' });


            return {status: 200, message: {token: token}}
        })
}

module.exports = {
    login
};