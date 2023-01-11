const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.resolve('src/js/config.json')).toString());

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', require('./routes'));

app.listen(config.server.port, () => {
    console.log(`Server starts on http://localhost:${config.server.port}`);
});

