const express = require('express');         //common JS module
const mongoose = require('mongoose');
const keys = require('./config/keys')
const path = require('path')
const app = express();
require('./models/Tweet')

mongoose.connect(keys.mongoURI);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});

require('./routes/search')(app);














const PORT = process.env.PORT || 5000
app.listen(PORT);
