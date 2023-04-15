const express = require("express")
const router = express.Router()
const {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
} = require("../controllers/articles")

// gets
router.get("/", getAllArticles)

// posts
router.post("/create", createArticle)

// patches
router.patch("/update/:id", updateArticle)

// deletes
router.delete("/delete/:id", deleteArticle)

module.exports = router
