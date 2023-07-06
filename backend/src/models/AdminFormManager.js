const connection = require("./index");

async function insertAdminForm(data) { 
  let bodyResponse = { ...data };

  return connection
    .promise()
    .query(
      "INSERT INTO admin_form (gender, civility, firstname, lastname, birthdate, family_situation, professional_status, profession, number_children, street, street_number, zip_code, town, country, phone_number, mobile_phone_number, email, patient_idpatient, user_iduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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

async function updateAdminForm(id, data) {
  let sqlQuery = "UPDATE admin_form SET ";

  for (let key in (itemValue = Object.keys(data))) {
    sqlQuery += `${itemValue[key]} = ?, `;
  }

  sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

  sqlQuery += ` WHERE idadmin_form = ${id}`;

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

async function deleteAdminForm(id) {
  let sqlQuery = `DELETE FROM admin_form where idadmin_form = ${id}`;

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

async function fetchAdminForm() {
  const sql = "SELECT * FROM admin_form";

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

async function fetchOneAdminForm(id) {
  return connection
    .promise()
    .query("SELECT * FROM admin_form WHERE idadmin_form = ?", id)
    .then(async ([rows]) => {
      return rows.length === 0
        ? { status: 404, message: {} }
        : { status: 200, message: rows[0] };
    })
    .catch((error) => {
      return { status: 500, message: error };
    });
}

// async function fetchAdminFormBy(filter) {
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
  insertAdminForm,
  fetchAdminForm,
  fetchOneAdminForm,
  // fetchUserBy,
  updateAdminForm,
  deleteAdminForm,
};