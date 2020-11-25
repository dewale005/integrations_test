module.exports = {
    get_user(req, res, next) {
        res.status(200).json({message: "all users are fetch all"})
    },

    // request card api(user can request for a card with their account and user id)
    request_card(req, res, next) {
        return res.status(200).json({id: 2, account: 'test'})
    }
}