const mysql2 = require('mysql2/promise');

const option = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
}

const connection = mysql2.createPool(option);

module.exports = connection;