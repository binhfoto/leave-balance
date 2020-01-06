//(function (exports, require, module, __filename, __dirname) {
require('dotenv').config();

const express = require('express');
const passport = require("passport");

// initialize express server
const app = express();

// public resource
app.use('/', express.static(__dirname + '/../../public'));
app.use('/dist', express.static(__dirname + '/../../dist'));

// google auth register
require("./configs/passport");
app.use(require("./apis/passport"));
app.use(passport.initialize());

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).send({message: err.message});
});

module.exports = app;

//});
