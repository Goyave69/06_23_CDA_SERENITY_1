const connection = require('./index');
const filterHelper = require('../services/FilterHelper');
//const {passwordHasher} = require('../services/PasswordHelper');

async function insertIntervention(data) {   

    let bodyResponse = {...data};
    

    return connection.promise().query("INSERT INTO interventions (specialty, date, quotation, number_done, patient_idpatient, documents_iddocuments, office_idoffice ) VALUES (?, ?, ?, ?, ?, ?, ?)", 
    [data.specialty, data.date, data.quotation, data.number_done, data.patient_idpatient, data.documents_iddocuments, data.office_idoffice])
    
    .then(async ([rows]) => { 
        bodyResponse.id = rows.insertId
        //@TODO remove password from body
        
        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function updateIntervention(id, data) {
    let sqlQuery = "UPDATE interventions SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);


    sqlQuery += ` WHERE idinterventions = ${id}`;

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

async function deleteIntervention(id) {

    let sqlQuery = `DELETE FROM intervention where idinterventions = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 

        return {status: 200, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchIntervention() {
    const sql = "SELECT * FROM interventions";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneIntervention(id) {

    //const sql = "SELECT * FROM Intervention WHERE idIntervention = ?";

    return connection.promise().query("SELECT * FROM interventions WHERE idinterventions = ?", id)

    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}

    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchInterventionBy(filter) {
    //search filter (that contain)
    let {sql, values } = filterHelper.checkKindOfFilter(filter);


    //order filter (sorting)

    //date filter 

    return connection.promise().query(sql,values)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })

}

module.exports = {
    insertIntervention,
    fetchIntervention,
    fetchOneIntervention,
    fetchInterventionBy,
    updateIntervention,
    deleteIntervention
}