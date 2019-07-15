const mongoose = require("mongoose");
const MONGO_URL = "mongodb://localhost:27017/bazar";

function connect () {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true},
    function (error) {
        if(error) {
            console.log('Erro ao conectar no banco de dados: ', error)
        } else{
            console.log('banco de dados conectado')
        }
    }
    );
}

module.exports = { connect }