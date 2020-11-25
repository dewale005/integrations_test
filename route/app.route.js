const { get_user } = require("../controller/app.controller");

var express = require('express');

const testRouter = express.Router()

testRouter.get('/', get_user)

module.exports = testRouter;