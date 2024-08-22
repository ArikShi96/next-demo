import db from "../../../lib/db";

export default (req, res) => {
  const { name } = req.query;
  db.query(`select * from ${name}`, (err, results, fields) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(results));
  });
};
