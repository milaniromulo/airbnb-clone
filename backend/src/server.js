const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://admin:admin123@ds229108.mlab.com:29108/aircnc', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);