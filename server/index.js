'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const request = require('request');
const session = require('express-session');
var recommendedData;

const app = express();
app.use(express.static(path.join(__dirname, '../app')));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

app.listen(process.env.PORT || 3000);