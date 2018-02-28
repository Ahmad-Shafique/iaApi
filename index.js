const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();

const port = 10000;

app.use(bodyParser.urlencoded({ extended:true }));

require('./_routes/root')(app,mysql);

app.listen(port, () => {
    console.log('IA Online !!!');
    console.log('listening on port number ' + port);
    console.log('awaiting command...');
})