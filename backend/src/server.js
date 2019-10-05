const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin123@ds229108.mlab.com:29108/aircnc', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

app.use(routes);

app.listen(3333);