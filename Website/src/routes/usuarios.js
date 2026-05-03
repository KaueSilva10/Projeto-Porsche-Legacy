var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

// Rota para realizar o cadastro de um novo usuário
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

// Rota para realizar o login (autenticação)
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;