var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined || senha == undefined) {
        res.status(400).send("Email ou senha indefinidos!");
        return;
    }

    usuarioModel.autenticar(email, senha)
        .then(function (resultado) {
            if (resultado.length == 1) {
                res.json(resultado[0]);
            } else {
                res.status(403).send("Email e/ou senha inválido(s)");
            }
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    console.log("DADOS RECEBIDOS NO CONTROLLER:", nome, email, senha); 

    if (nome == undefined || email == undefined || senha == undefined) {
        res.status(400).send("Um dos campos está undefined!");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(function (resultado) {
                console.log("CADASTRO REALIZADO COM SUCESSO");
                res.json(resultado);
            }).catch(function (erro) {
                console.log("ERRO NO MODEL:", erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    autenticar,
    cadastrar
};