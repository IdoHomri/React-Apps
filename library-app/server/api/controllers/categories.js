module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).json({
            message: "Get All Categories",
        })
    },
    createCategory: (req, res) => {
        res.status(200).json({
            message: "Create New Category",
        })
    },
    updateCategory: (req, res) => {
        const categoryId = req.params.id
        res.status(200).json({
            message: `Update Category ${categoryId}`,
        })
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.id
        res.status(200).json({
            message: `Delete Category ${categoryId}`,
        })
    },
}
