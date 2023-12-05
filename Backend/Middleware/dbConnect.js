import mysql from "mysql2";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'social-app',
});

export default connection;