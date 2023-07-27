const connection = require('./index');
const filterHelper = require('../services/FilterHelper');
//const {passwordHasher} = require('../services/PasswordHelper');

async function insertIntervention(data) {   

    let bodyResponse = {...data};
    

    return connection.promise().query("INSERT INTO intervention (intervention_name, date, id_doc, id_patient, id_office ) VALUES (?, ?, ?, ?, ?)", 
    [data.intervention_name, data.date, data.id_doc, data.id_patient, data.id_office])
    
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
    let sqlQuery = "UPDATE intervention SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);


    sqlQuery += ` WHERE id_intervention = ${id}`;

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

    let sqlQuery = `DELETE FROM intervention where id_intervention = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 

        return {status: 200, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchIntervention() {
    //const sql = "SELECT * FROM intervention";

    const sql = `SELECT \
    intervention.id_intervention, \
     intervention.intervention_name, \
     CONCAT(doctor.lastname,' ',doctor.firstname) AS  doctor, \
     CONCAT(patient.lastname,' ',patient.firstname) AS  patient, \
     office.name as office, \
     intervention.date \
     FROM intervention \
     JOIN user as doctor ON doctor.iduser = intervention.id_doc
     JOIN user as patient ON patient.iduser = intervention.id_patient
     JOIN office as office ON office.idoffice = intervention.id_office`
  
  

    
    
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

    return connection.promise().query("SELECT * FROM intervention WHERE id_intervention = ?", id)

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