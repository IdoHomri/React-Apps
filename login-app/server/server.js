const express = require("express");
const morgan = require("morgan");
const sql = require("mssql");

const dbconfig = {
  user: "loginappuser",
  password: "Aa123456",
  database: "LoginApp",
  server: "10.1.2.3",
  port: 11433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const app = express();

// app.use(morgan)

app.get("/login", (req, res) => {
  sql.connect(dbconfig, (err) => {
    if (err) console.log(err);
    var request = new sql.Request();
    request.query("select * from users", (err, records) => {
      if (err) {
        res.status(500).json("server error: " + err.message);
      } else {
        if (records.recordset.length > 0) {
          res.status(200).json("login scuccess");
        }
      }
    });
  });
});

// not found route
app.get("/", (req, res) => {
    res.status(404).json("Not Found")
});

app.listen(8000, () => {
  console.log("connected to server in port 8000");
});
