const express = require("express")
const app = express()
const morgan = require("morgan")

const articlesRouter = require("./api/routes/articles")
const categoriesRouter = require("./api/routes/categories")
const usersRouter = require("./api/routes/users")



app.use(morgan("dev"))
app.use(express.json())
// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        )
        return res.status(200).json({})
    }
    next()
})

// routers
app.use("/articles", articlesRouter)
app.use("/categories", categoriesRouter)
app.use("/users", usersRouter)

// not found route
app.use((req, res, next) => {
    const error = new Error("Route Not Found")
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message,
        },
    })
})

module.exports = app
