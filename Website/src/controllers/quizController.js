var quizModel = require("../models/quizModel");

function carregarQuiz(req, res) {
    quizModel.carregarQuiz()
        .then(function (resultado) {
            if (resultado.length > 0) {
                const perguntasFormatadas = [];
                let perguntaAtualId = null;

                resultado.forEach(linha => {
                    if (linha.idpergunta !== perguntaAtualId) {
                        perguntaAtualId = linha.idpergunta;
                        perguntasFormatadas.push({
                            enunciado: linha.enunciado,
                            alternativas: []
                        });
                    }
                    perguntasFormatadas[perguntasFormatadas.length - 1].alternativas.push({
                        texto: linha.texto,
                        correta: linha.correta
                    });
                });
                res.status(200).json(perguntasFormatadas);
            } else {
                res.status(204).send("Nenhuma pergunta encontrada!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrarResultado(req, res) {
    var acertos = req.body.acertosServer;
    var erros = req.body.errosServer;
    var idUsuario = req.body.idUsuarioServer;

    if (idUsuario == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else {
        quizModel.cadastrarResultado(acertos, erros, idUsuario)
            .then(function (resultado) {
                res.status(200).json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarUltimosResultados(req, res) {
    var idUsuario = req.params.idUsuario;
    const limite_linhas = 7;

    quizModel.buscarUltimosResultados(idUsuario, limite_linhas)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarResultadoTempoReal(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.buscarResultadoTempoReal(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarKpisAcumuladas(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando KPIs acumuladas para o usuário: ${idUsuario}`);

    quizModel.buscarKpisAcumuladas(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as KPIs acumuladas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    carregarQuiz,
    cadastrarResultado,
    buscarUltimosResultados,
    buscarResultadoTempoReal,
    buscarKpisAcumuladas
};