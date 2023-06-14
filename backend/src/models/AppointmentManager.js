const connection = require('./index');
const filterHelper = require('../services/FilterHelper');
const {passwordHasher} = require('../services/PasswordHelper');

async function insertAppointment(data) { 

    let bodyResponse = {...data};
    

    return connection.promise().query("INSERT INTO appointment (date_time, patient_idpatient, interventions_idinterventions, office_idoffice) VALUES (?, ?, ?, ?)", [data.date_time, data.patient_id, data.interventions_id, data.office_id])
    .then(async ([rows]) => { 
        bodyResponse.id = rows.insertId
        //@TODO remove password from body
        
        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function updateAppointment(id, data) {
    let sqlQuery = "UPDATE appointment SET ";

    for (let key in itemValue = Object.keys(data)) {
        sqlQuery += `${itemValue[key]} = ?, `
    }

    sqlQuery = sqlQuery.slice(0, sqlQuery.length - 2);


    sqlQuery += ` WHERE idappointment = ${id}`;

    let bodyResponse = {...data};
    
    return connection.promise().query(sqlQuery, [
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

        return {status: 201, message: bodyResponse}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function deleteAppointment(id) {

    let sqlQuery = `DELETE FROM Appointment where idappointment = ${id}`;
    
    return connection.promise().query(sqlQuery)
    .then(async ([rows]) => { 

        return {status: 200, message: {}}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchAppointment() {
    const sql = "SELECT * FROM appointment";
    
    return connection.promise().query(sql)
    .then(async ([rows]) => { 
        return {status: 200, message: rows}
    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchOneAppointment(id) {

    //const sql = "SELECT * FROM Appointment WHERE idAppointment = ?";

    return connection.promise().query("SELECT * FROM appointment WHERE idappointment = ?", id)

    .then(async ([rows]) => {
        return rows.length === 0 ? {status: 404, message: {}} : {status: 200, message: rows[0]}

    })
    .catch(error => {
        return {status: 500, message: error}
    })
}

async function fetchAppointmentBy(filter) {
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
    insertAppointment,
    fetchAppointment,
    fetchOneAppointment,
    fetchAppointmentBy,
    updateAppointment,
    deleteAppointment
}