import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.MYSQLHOST;
const user = process.env.MYSQLUSER;
const password = process.env.MYSQLPASSWORD;
const database = process.env.MYSQLDATABASE;
const port = Number(process.env.MYSQLPORT || 3306);

if (!host || !user || !password || !database) {
  throw new Error("[DB] Missing MYSQLHOST/MYSQLUSER/MYSQLPASSWORD/MYSQLDATABASE in Railway Variables.");
}

export const pool = mysql.createPool({
  host,
  user,
  password,
  database,
  port,
  waitForConnections: true,
  connectionLimit: 10,
});
