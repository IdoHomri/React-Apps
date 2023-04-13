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

function GetAllUsers() {
  sql.connect(dbconfig, (err) => {
    if (err) console.log(err)
    var request = new sql.Request();
    request.query("select * from users", (err, records) => {
      if (err) {
        console.log(err);
      } else {
        return records.recordset
      }
    });
  });
}

module.exports.GetAllUsers = GetAllUsers
