const mongoose = require('mongoose');

mongoose.connect('mongodb:localhost/aprus_bd');
mongoose.Promise = global.Promise;

module.exports = mongoose;