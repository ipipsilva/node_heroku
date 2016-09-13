var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fotoSchema = new Schema({
    nome: {type: String},
    descricao: {type: String},
    url: {type: String}
});

var Foto = mongoose.model('Foto', fotoSchema);

module.exports = Foto;
