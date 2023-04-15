const express = require("express")
const router = express.Router()
const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
} = require("../controllers/Categories")

// gets
router.get("/", getAllCategories)

// posts
router.post("/create", createCategory)

// patches
router.patch("/update/:id", updateCategory)

// deletes
router.delete("/delete/:id", deleteCategory)

module.exports = router
