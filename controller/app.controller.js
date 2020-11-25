module.exports = {
    get_user(req, res, next) {
        res.status(200).json({message: "all users are fetch all"})
    },

    // request card api(user can request for a card with their account and user id)
    request_card(req, res, next) {
        //payload for the user to request for card
        let request_data = {
            id: 2,
            account: 'test'
        }

        // return response
        res.status(200).json(request_data)
    }
}