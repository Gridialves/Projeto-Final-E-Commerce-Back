const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const BazarSchema = new Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    imagem: {type: String, required: true},
    nome: {type: String, required: true},
    tamanho: { type: Number, required: true},
    valor: {type: Number, required: true},
    cart: {type: Boolean, required: true},
})

const bazarModel = mongoose.model("bazar", BazarSchema); 

module.exports = bazarModel;