const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aprusbd',{useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;