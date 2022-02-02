const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "bd123",
  host: "localhost",
  port: "5432",
  database: "elivraria",
});

module.exports = pool;
