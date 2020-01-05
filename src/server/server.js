//(function (exports, require, module, __filename, __dirname) {

const express = require('express');
const app = express();


// public resource
app.use('/', express.static(__dirname + '/../../public'));
app.use('/dist', express.static(__dirname + '/../../dist'));


// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({message: err.message});
});

module.exports = app;

//});
