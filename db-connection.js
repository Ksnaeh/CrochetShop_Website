var mySql = require('mysql');
var connection = mySql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: "ecrochetshop"
});
module.exports = connection;