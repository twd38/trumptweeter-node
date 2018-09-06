const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    tweetId: String,
    name: String
});

mongoose.model('tweets', tweetSchema);