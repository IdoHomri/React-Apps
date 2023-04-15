module.exports = {
    getAllArticles: (req, res) => {
        res.status(200).json({
            message: "Get All Articles",
        })
    },
    createArticle: (req, res) => {
        res.status(200).json({
            message: "Create New Article",
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
