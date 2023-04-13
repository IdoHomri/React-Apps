const express = require('express')
const morgan = require('morgan')

const app = express()

// app.use(morgan)


app.get("/", (req, res) => {
    res.status(200)
    res.json("hello root")
})

app.listen(8000, () => {
    console.log("connected to server in port 8000")
})