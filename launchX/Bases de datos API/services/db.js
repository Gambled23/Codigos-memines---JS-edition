const mysql = require('mysql2/promise'); //Promise es porque está en un server externo
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db); //Pasarle config
    const [results, ] = await connection.execute(sql, params);
    return results;
}

module.exports = {
    query
}