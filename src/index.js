// entry point for our server

// setup config right before anything by requiring it
const config = require('./server/configs');
const server = require('./server/server');

// start server
server.listen(config.port, () => {
    console.log(`Server is listened on port ${config.port}`);
});

module.exports = server;
