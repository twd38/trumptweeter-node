const express = require('express');         //common JS module
const path = require('path')
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

require('./routes/search')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);
