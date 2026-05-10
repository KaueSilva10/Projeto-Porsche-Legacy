var database = require("../database/config");

function carregarQuiz() {
    var instrucaoSql = `
        SELECT 
            p.idpergunta, 
            p.enunciado, 
            a.idalternativas, 
            a.texto, 
            a.correta 
        FROM pergunta p 
        JOIN alternativas a ON a.fkpergunta = p.idpergunta
        ORDER BY p.idpergunta, a.idalternativas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarResultado(acertos, erros, idUsuario) {
    var instrucaoSql = `
        INSERT INTO relatorio (acertos, erros, fkusuario, datarealizacao) 
        VALUES (${acertos}, ${erros}, ${idUsuario}, NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpisAcumuladas(idUsuario) {
    var instrucaoSql = `
        SELECT 
            SUM(acertos) as total_acertos, 
            SUM(erros) as total_erros, 
            COUNT(idrelatorio) as total_tentativas
        FROM relatorio 
        WHERE fkusuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function buscarUltimosResultados(idUsuario, limite_linhas) {
    var instrucaoSql = `
        SELECT 
            acertos, 
            erros
        FROM relatorio
        WHERE fkusuario = ${idUsuario}
        ORDER BY idrelatorio ASC LIMIT ${limite_linhas}`; 
    return database.executar(instrucaoSql);
}

module.exports = {
    carregarQuiz,
    cadastrarResultado,
    buscarUltimosResultados,
    buscarKpisAcumuladas
};