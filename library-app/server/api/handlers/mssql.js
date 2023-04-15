const express = require("express")
const mssql = require("mssql")

const serverConfig = {
    user: "articlesuser",
    password: "[7AY5jb=nFBTS<mD",
    server: "10.1.2.3",
    port: 11433,
    database: "Articles",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}

// mssql.connect(serverConfig)
// console.log(mssql.query("select @@VERSION"))

const insert = (query) => {
    mssql.connect(serverConfig, (err) => {
        if (err) console.log(err)
        var request = new mssql.Request()
        request.query(query, (err, records) => {
            if (err) {
                console.log(err)
            }
            // ADD RESPOND GENERIC MESSAGE LATER
        })
    })
}

const select = (query) => {
    mssql.connect(serverConfig, (err) => {
        if (err) console.log(err)
        var request = new mssql.Request()
        request.query(query, (err, records) => {
            if (err) {
                console.log(err)
            } else {
                console.log(records.recordset)
                return records.recordset
            }
        })
    })
}



const test = () => {
    return { a: 1, b: 2 }
}

module.exports = {
    insert,
    select,
    test,
}
