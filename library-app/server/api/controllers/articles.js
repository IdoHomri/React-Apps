const uuid = require("uuid")
const mssql = require("mssql")
// const { insert, select, test } = require("../handlers/mssql")

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

module.exports = {
    getAllArticles: (req, res) => {
        const query = "SELECT * FROM Articles"
        mssql.connect(serverConfig, (err) => {
            if (err) console.log(err)
            var request = new mssql.Request()
            request.query(query, (err, records) => {
                if (err) {
                    res.status(500).json({ err })
                } else {
                    res.status(200).json(records.recordset)
                }
            })
        })
    },
    createArticle: (req, res) => {
        const { title, description, content } = req.body
        const generatedId = uuid.v4()
        const query = `INSERT INTO Articles ([id], [title], [desciption], [conetnt]) 
                       VALUES ('${generatedId}','${title}','${description}','${content}')`

        mssql.connect(serverConfig, (err) => {
            if (err) console.log(err)
            var request = new mssql.Request()
            request.query(query, (err, records) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({ err })
                } else {
                    res.status(200).json({
                        message: `Article ${generatedId} Created Successfully`,
                    })
                }
            })
        })
    },
    updateArticle: (req, res) => {
        const articleId = req.params.id
        res.status(200).json({
            message: `Update Article ${articleId}`,
        })
    },
    deleteArticle: (req, res) => {
        const articleId = req.params.id
        res.status(200).json({
            message: `Delete Article ${articleId}`,
        })
    },
}
