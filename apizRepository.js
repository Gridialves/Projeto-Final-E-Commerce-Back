const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGODB_URI || "mongodb://bazar:bazar10@ds231377.mlab.com:31377/projeto-teste";

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