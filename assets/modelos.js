let listaImagens = ["1.webp", "2.webp", "3.jpg", "4.jpg", "5.webp", "6.jpg", "7.jpg", "8.webp"];
let listaAnos = ["1948 - 1965", "1963 - Presente", "1965 - 1969", "1976 - 1991", "1986 - 1993", "2003 - 2007", "2002 - Presente", "2019 - Presente"];
let listaHistorias = [
    "Foi o primeiro carro de produção a levar o nome Porsche. Ferry Porsche não encontrava o carro dos seus sonhos, então decidiu fabricá-lo.",
    "Originalmente seria chamado de 901. É o modelo que define a marca até hoje, mantendo a tradição do motor na traseira.",
    "Criado como uma versão de entrada para quem não podia pagar o 911 na época, unindo o novo design ao motor do antigo 356.",
    "Durante a crise do petróleo, a Porsche explorou motores dianteiros refrigerados a água para diversificar sua linha.",
    "O carro mais avançado do mundo em sua época. Tinha tração nas quatro rodas e foi base para tecnologias de rali.",
    "Nasceu de um projeto de motor V10 cancelado da Fórmula 1, tornando-se uma das experiências de condução mais puras da história.",
    "O lançamento mais polêmico da marca. Um SUV que salvou a Porsche da falência e permitiu a continuidade do 911.",
    "O primeiro passo totalmente elétrico da marca, provando que eletricidade e a alma Porsche podem caminhar juntas."
];

let listaIntuitos = [
    "Criar um esportivo leve, ágil e eficiente baseado na simplicidade mecânica.",
    "Oferecer um sucessor mais potente e confortável que o 356, sem perder a essência esportiva.",
    "Tornar a marca acessível para um público maior enquanto o 911 se consolidava no topo.",
    "Criar carros com distribuição de peso perfeita e custo de manutenção menor.",
    "Mostrar ao mundo a capacidade tecnológica da Porsche em competições extremas.",
    "Celebrar a engenharia mecânica bruta com um motor V10 de competição em um carro de rua.",
    "Gerar lucro e volume de vendas para garantir a sobrevivência financeira da fabricante.",
    "Prover desempenho de supercarro com zero emissão de gases."
];

function mudarModelo() {
    // 1. Capturamos o valor do select e calculamos o índice (posição na lista)
    let selecao = Number(slct_modelo.value);
    let indice = selecao - 1;
    
    p_historia.innerHTML = listaHistorias[indice];
    p_intuito.innerHTML = listaIntuitos[indice];
    h3_ano.innerHTML = `LANÇAMENTO: ${listaAnos[indice]}`;
    img_porsche.src = `./assets/img/${listaImagens[indice]}`;
    img_porsche.style.display = "block";
}