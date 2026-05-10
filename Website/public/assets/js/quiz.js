let perguntas = [];
let questaoAtual = 0;
let acertos = 0;
let erros = 0;
let proximaAtualizacao;
let meuGrafico;

if (sessionStorage.ID_USUARIO == undefined) {
    alert("Acesso negado! Faça login para acessar o quiz.");
    window.location = "login.html";
}

window.onload = function () {
    buscarPerguntas();
};

function buscarPerguntas() {
    console.log("TENTANDO BUSCAR PERGUNTAS...");
    fetch("quiz/carregar-quiz", { cache: 'no-store' })
        .then(function (res) {
            if (res.ok) {
                res.json().then(function (json) {
                    console.log("Perguntas carregadas:", json);
                    perguntas = json;
                    exibirQuestao();
                });
            } else {
                console.error("Erro ao carregar perguntas");
            }
        })
        .catch(function (erro) {
            console.error("Erro no fetch das perguntas:", erro);
        });
}

function exibirQuestao() {
    if (questaoAtual >= perguntas.length) {
        finalizarQuiz();
        return;
    }

    const questao = perguntas[questaoAtual];
    const perguntaElemento = document.getElementById('pergunta');
    const botoesAlternativas = document.querySelectorAll('.btn-alternativa');
    const contadorElemento = document.getElementById('contador-questoes');
    const barraProgresso = document.getElementById('barra-progresso');

    
    perguntaElemento.innerText = questao.enunciado;
    contadorElemento.innerText = `Questão ${questaoAtual + 1} de ${perguntas.length}`;

       const progresso = ((questaoAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = `${progresso}%`;

    questao.alternativas.forEach((alternativa, index) => {
        botoesAlternativas[index].innerText = alternativa.texto;
        botoesAlternativas[index].onclick = function () {
            validarResposta(alternativa.correta);
        };
    });
}

function validarResposta(isCorreta) {
    if (isCorreta == 1) {
        acertos++;
        document.getElementById("kpi-acertos").innerText = acertos;
    } else {
        erros++;
        document.getElementById("kpi-erros").innerText = erros;
    }

    document.getElementById("kpi-total").innerText = acertos + erros;
    questaoAtual++;
    exibirQuestao();
}

function finalizarQuiz() {
    document.getElementById("jogo").style.display = "none";
    document.getElementById("resultado-quiz").style.display = "block";

    const idUsuario = sessionStorage.ID_USUARIO;

    const corpo = {
        acertosServer: acertos,
        errosServer: erros,
        idUsuarioServer: idUsuario
    };

    fetch("/quiz/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        if (resposta.ok) {
            console.log("Resultado salvo com sucesso!");
            obterDadosGrafico(idUsuario);
            atualizarKpisAcumuladas();
        } else {
            console.error("Erro ao salvar resultado");
        }
    });
}

function obterDadosGrafico(idUsuario) {
    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/quiz/ultimas/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    resposta.reverse();
                    plotarGrafico(resposta, idUsuario);
                });
            }
        });
}

function plotarGrafico(resposta, idUsuario) {
    let labels = [];
    let dadosAcertos = [];

    for (let i = 0; i < resposta.length; i++) {
        labels.push(`${i + 1}ª Jogada`);
        dadosAcertos.push(resposta[i].acertos);
    }

    let dados = {
        labels: labels,
        datasets: [{
            label: 'Desempenho (Acertos)',
            data: dadosAcertos,
            borderColor: '#E10600',
            backgroundColor: 'rgba(225, 6, 0, 0.1)',
            fill: true,
            tension: 0.4
        }]
    };

    const config = {
        type: 'line',
        data: dados,
        options: {
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1 } }
            }
        }
    };

    if (meuGrafico) meuGrafico.destroy();
    meuGrafico = new Chart(document.getElementById(`myChartCanvas`), config);
}

function atualizarGrafico(idUsuario, dados, myChart) {
    fetch(`/quiz/tempo-real/${idUsuario}`, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (novoRegistro) {
                    if (novoRegistro[0].momento_grafico != dados.labels[dados.labels.length - 1]) {
                        dados.labels.shift();
                        dados.labels.push(novoRegistro[0].momento_grafico);
                        dados.datasets[0].data.shift();
                        dados.datasets[0].data.push(novoRegistro[0].acertos);
                        myChart.update();
                    }
                    proximaAtualizacao = setTimeout(() => atualizarGrafico(idUsuario, dados, myChart), 2000);
                });
            }
        });
}

function atualizarKpisAcumuladas() {
    const idUsuario = sessionStorage.ID_USUARIO;
    
    fetch(`/quiz/acumulado/${idUsuario}`).then(res => res.json()).then(dados => {
        const info = dados[0];
        document.getElementById("kpi-total").innerText = info.total_tentativas;
        document.getElementById("kpi-acertos").innerText = info.total_acertos || 0;
        document.getElementById("kpi-erros").innerText = info.total_erros || 0;
    });
}

console.log("O script quiz.js foi carregado com sucesso!");
buscarPerguntas();