import mysql from "mysql2";

let db = null;

if (!db) {
  db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "ct_development",
  });

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL");
  });
}

export default db;
