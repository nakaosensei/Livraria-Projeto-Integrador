const pg = require("pg");
const pgPool = new pg.Pool({
    host: '127.0.0.1',
    database: 'livraria',
    user: 'livrariauser',
    password: 'L|\\/R0',
    port: 5432,
    ssl: false
});
module.exports = { pgPool };
