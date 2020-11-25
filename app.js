var express = require('express');
const testRouter = require('./route/app.route');


const app = express();
const port = 3000

app.use('/test', testRouter)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

module.exports = app;