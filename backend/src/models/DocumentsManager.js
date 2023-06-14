const connection = require("./index");

async function insertDocument(data) {
  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(
      "INSERT INTO documents (informed_consent, quotation, prescription, trust_person, health_insurance, patient_idpatient, intervention_idinterventions, intervention_patient_idpatient, intervention_office_idoffice, intervention_documents_iddocuments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", Object.values(data)
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

async function updateDocument(id, data) {
  let sqlQuery = "UPDATE documents SET ";

  for (let key in (itemValue = Object.keys(data))) {
    sqlQuery += `${itemValue[key]} = ?, `;
  }

  sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

  sqlQuery += ` WHERE iddocuments = ${id}`;

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

async function deleteDocument(id) {
  let sqlQuery = `DELETE FROM documents where iddocuments = ${id}`;

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

async function fetchDocument() {
  const sql = "SELECT * FROM documents";

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

async function fetchOneDocument(id) {
  return connection
    .promise()
    .query("SELECT * FROM documents WHERE iddocuments = ?", id)
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
  insertDocument,
  fetchDocument,
  fetchOneDocument,
  // fetchUserBy,
  updateDocument,
  deleteDocument,
};
