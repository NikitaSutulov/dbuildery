const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.resolve('src/js/config.json')).toString());

const getConnection = async () => await mysql.createConnection({
    uri: config.db.uri,
    namedPlaceholders: true,
    password: config.db.password
});

module.exports = getConnection;