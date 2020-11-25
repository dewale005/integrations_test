module.exports = {
    get_user(req, res, next) {
        res.status(200).json({message: "all users are fetch"})
    }
}