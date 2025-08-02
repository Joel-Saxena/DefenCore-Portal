// db_connection.js
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');

// Explicitly load .env from backend folder
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test connection
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log(`✅ Connection to DB successful on: ${process.env.DB_HOST}`);
    connection.release();
  } catch (err) {
    console.error('❌ Error connecting to DB:', err.message);
  }
})();

module.exports = pool;
