const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "0203lili",
    host: "localhost",
    port: "5432",
    database:"E-livraria",
})

module.exports = pool;