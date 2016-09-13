var express = require('express');
var bodyParser  = require('body-parser');
var connection = require('../config/database.js');
var Foto = require('../models/foto');

module.exports = function(router) {

    router.route('/fotos')
    .get(function(req, res) {
        Foto.find({}).sort([['nome', 'ascending']])
        .exec( function(err, fotos) {
            if(err) {
                console.log('Erro ao buscar fotos! Erro: ' + err);
            } else {
                res.send(JSON.stringify(fotos));
            }
        });
    })

    .post(function(req, res){
        if(verificaCamposPreenchidos(req)){
            var foto = new Foto({
                nome: req.body.nome,
                descricao: req.body.descricao,
                url: req.body.url
            });

            foto.save(function(err){
                if (err) {
                     console.log('Erro ao salvar foto! Erro: ' + err);
                }

                res.json({message: 'Foto salva com sucesso!'});
            });
        }
    });

    function verificaCamposPreenchidos(req){
        return (req.body.nome && req.body.url && req.body.descricao);
    }
};
