module.exports = {
    signup: (req, res) => {
        res.status(200).json({
            message: "Sign Up",
        })
    },
    login: (req, res) => {
        res.status(200).json({
            message: "Login",
        })
    }
}
