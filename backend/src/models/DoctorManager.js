const connection = require("./index");

async function insertDoctor(data) {
  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(
      "INSERT INTO doctor (specialty, languages, biography, diploma, experiences, publications, user_iduser) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        data.specialty,
        data.languages,
        data.biography,
        data.diploma,
        data.experiences,
        data.publications,
        data.user_iduser,
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

async function updateDoctor(id, data) {
  let sqlQuery = "UPDATE doctor SET ";

  for (let key in (itemValue = Object.keys(data))) {
    sqlQuery += `${itemValue[key]} = ?, `;
  }

  sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

  sqlQuery += ` WHERE iddoctor = ${id}`;

  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(sqlQuery, Object.values(data))
    .then(async ([rows]) => {
      bodyResponse.id = rows.insertId;
      //@TODO remove password from body

      return { status: 201, message: bodyResponse };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function deleteDoctor(id) {
  let sqlQuery = `DELETE FROM doctor where iddoctor = ${id}`;

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

async function fetchDoctor() {
  const sql = "SELECT * FROM doctor";

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

async function fetchOneDoctor(id) {
  return connection
    .promise()
    .query("SELECT * FROM doctor WHERE iddoctor = ?", id)
    .then(async ([rows]) => {
      return rows.length === 0
        ? { status: 404, message: {} }
        : { status: 200, message: rows[0] };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

// async function fetchOfficeBy(filter) {
//     //search filter (that contain)
//     let {sql, values } = filterHelper.checkKindOfFilter(filter);

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
  insertDoctor,
  fetchDoctor,
  fetchOneDoctor,
  // fetchUserBy,
  updateDoctor,
  deleteDoctor,
};
