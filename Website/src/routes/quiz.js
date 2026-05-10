var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/carregar-quiz", function (req, res) {
    quizController.carregarQuiz(req, res);
});

router.post("/cadastrar", function (req, res) {
    quizController.cadastrarResultado(req, res);
});

router.get("/ultimas/:idUsuario", function (req, res) {
    quizController.buscarUltimosResultados(req, res);
});

router.get("/tempo-real/:idUsuario", function (req, res) {
    quizController.buscarResultadoTempoReal(req, res);
});

router.get("/acumulado/:idUsuario", function (req, res) {
    quizController.buscarKpisAcumuladas(req, res);
});

module.exports = router;