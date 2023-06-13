const connection = require('./index');

async function insertOffice(data) {

    let bodyResponse = {...data};
    
    return connection.promise().query("INSERT INTO office (name, doc_name, street_number, street_name, zip_code, phone_number, email, free_parking, disabled, open_hours, specialty) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", Object.values(data))
    .then(async ([rows]) => { 
        bodyResponse.id = rows.insertId
        //@TODO remove password from body
        
        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function updateOffice(id, data) {
    let sqlQuery = "UPDATE office SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);

    sqlQuery += ` WHERE idoffice = ${id}`;

    let bodyResponse = {...data};
    
    return connection.promise().query(sqlQuery, Object.values(data))
    .then(async ([rows]) => { 
        //bodyResponse.id = rows.insertId
        //@TODO remove password from body

        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function deleteOffice(id) {
    let sqlQuery = `DELETE FROM office where idoffice = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 

        return {status: 200, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOffice() {
    const sql = "SELECT * FROM office";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneOffice(id) {

    return connection.promise().query("SELECT * FROM office WHERE idoffice = ?", id)
    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
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
    insertOffice,
    fetchOffice,
    fetchOneOffice,
    // fetchUserBy,
    updateOffice,
    deleteOffice
}