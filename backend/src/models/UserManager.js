const connection = require("./index");
// const filterHelper = require('../services/FilterHelper');
const { passwordHasher } = require("../services/PasswordHelper");

async function insertUser(data) {
  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(
      "INSERT INTO user (firstname, lastname, email, phone, password, roles) VALUES (?, ?, ?, ?, ?, ?)",
      [
        data.firstname,
        data.lastname,
        data.email,
        data.phone,
        data.password,
        JSON.stringify(data.roles),
      ]
    )

    .then(async ([rows]) => {
      bodyResponse.id = rows.insertId;
      //@TODO remove password from body

      return { status: 201, message: bodyResponse };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function updateUser(id, data) {
  let sqlQuery = "UPDATE user SET ";

  for (let key in (itemValue = Object.keys(data))) {
    sqlQuery += `${itemValue[key]} = ?, `;
  }

  sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

  sqlQuery += ` WHERE iduser = ${id}`;

  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(sqlQuery, [
      data.firstname,
      data.lastname,
      data.email,
      data.phone,
      await passwordHasher(data.password),
      JSON.stringify(data.roles),
    ])

    .then(async ([rows]) => {
      //bodyResponse.id = rows.insertId
      //@TODO remove password from body

      return { status: 201, message: bodyResponse };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function deleteUser(id) {
  let sqlQuery = `DELETE FROM user where iduser = ${id}`;

  return connection
    .promise()
    .query(sqlQuery)
    .then(async ([rows]) => {
      return { status: 200, message: {} };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function fetchUser() {
  const sql = "SELECT * FROM user";

  return connection
    .promise()
    .query(sql)
    .then(async ([rows]) => {
      return { status: 200, message: rows };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function fetchOneUser(id) {
  return connection
    .promise()
    .query("SELECT * FROM user WHERE iduser = ?", id)
    .then(async ([rows]) => {
      return rows.length === 0
        ? { status: 404, message: {} }
        : { status: 200, message: rows[0] };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

// async function fetchUserBy(filter) {
//     //search filter (that contain)
//     let { sql, values } = filterHelper.checkKindOfFilter(filter);

//     //order filter (sorting)

//     //date filter

//     return connection.promise().query(sql,values)
//     .then(async ([rows]) => {
//         return {status: 200, message: rows}
//     })
//     .catch(error => {
//         return {status: 500, message: error}
//     })

// }

module.exports = {
  insertUser,
  fetchUser,
  fetchOneUser,
  // fetchUserBy,
  updateUser,
  deleteUser,
};
