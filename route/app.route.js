const { get_user, request_card } = require("../controller/app.controller");

var express = require('express');

const testRouter = express.Router()

testRouter.get('/', get_user)
testRouter.post('/request', request_card)

module.exports = testRouter;