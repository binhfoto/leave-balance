var config = {
    url: process.env.SERVER_URI || 'http://localhost:3000',
    port: process.env.PORT || 3000,
};

module.exports = Object.assign({}, config);
