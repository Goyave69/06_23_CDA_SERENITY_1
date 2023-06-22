const connection = require("./index");

async function insertPatient(data) { 
  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(
      "INSERT INTO patient (user_iduser) VALUES (?)",
      Object.values(data)
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

async function updatePatient(id, data) {
  let sqlQuery = "UPDATE patient SET ";

  for (let key in (itemValue = Object.keys(data))) {
    sqlQuery += `${itemValue[key]} = ?, `;
  }

  sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

  sqlQuery += ` WHERE idpatient = ${id}`;

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

async function deletePatient(id) {
  let sqlQuery = `DELETE FROM patient where idpatient = ${id}`;

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

async function fetchPatient() {
  const sql = "SELECT * FROM patient";

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

async function fetchOnePatient(id) {
  return connection
    .promise()
    .query("SELECT * FROM patient WHERE idpatient = ?", id)
    .then(async ([rows]) => {
      return rows.length === 0
        ? { status: 404, message: {} }
        : { status: 200, message: rows[0] };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

async function fetchPatientBy(filter) {
    const tableName = 'patient';
    const { sql, values } = checkKindOfFilter(tableName, filter);
  
    // order filter (sorting)
    // date filter
  
    try {
      const [rows] = await connection.promise().query(sql, values);
      return { status: 200, message: rows };
    } catch (error) {
      return { status: 500, message: error };
    }
}
  

module.exports = {
  insertPatient,
  fetchPatient,
  fetchOnePatient,
  fetchPatientBy,
  updatePatient,
  deletePatient,
};
