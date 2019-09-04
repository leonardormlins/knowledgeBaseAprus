const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aprusbd',{useCreateIndex: true, useNewUrlParser: true})
.then(() => console.log("Conectado ao mongo"))
.catch(err => console.log("Falha na conexão: "+err));
mongoose.Promise = global.Promise;

module.exports = mongoose;