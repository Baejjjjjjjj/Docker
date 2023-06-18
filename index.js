'use strict';

const os = require('os');
const express = require('express');


const PORT = 8080;
const HOST = '0.0.0.0';


const app = express();
app.get('/', (req, res) => {
  res.send(`Your app is running on Host : ${os.hostname()}\r\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);