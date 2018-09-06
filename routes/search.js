const mongoose = require('mongoose');

const Tweet = mongoose.model('tweets');

module.exports = app => {
    app.get('/search', (req, res) => {
        res.send("Search Results");
//NEED TO GET ACCESS TO MONGODB DOCUMENTS


    })

    app.get('/search/save', (req, res) => {
        console.log(Tweet);
    });
};