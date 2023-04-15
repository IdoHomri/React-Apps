const express = require("express")
const router = express.Router()
const {
    signup,
    login
} = require("../controllers/users")

// posts
router.post("/", login)
router.post("/create", signup)


module.exports = router
