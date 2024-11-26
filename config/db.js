const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
);

// Test the pool  connection
pool.getConnection((err, connection) => {
  if (err) {
    console.log('Error connecting to mysql', err);
    return;
  }
  console.log('Connected to MYSQL as id:', connection.threadId);
  connection.release();
});

module.exports = pool.promise;