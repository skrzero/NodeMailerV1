import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectMariaDB = mysql.createPool({
  host: process.env.MARIADB_HOST,
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_NAME,
  port: process.env.MARIADB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default connectMariaDB;
