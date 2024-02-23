const mysql = require("mysql")


const DBConection = ()=>{
    const db = mysql.createConnection({
        host:"125.30.168.184.host.secureserver.net",
        user:"esiapionline_soporte",
        password:"Soporte@20",
        database:"esiapionline_moodle"
    })
    return {db}
}

module.exports = DBConection