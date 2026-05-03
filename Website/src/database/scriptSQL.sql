create database projetoIndividual;
use projetoIndividual;

create table usuario (
    idusuario int primary key auto_increment,
    nome varchar(45) not null,
    email varchar(45) not null unique,
    senha varchar(100) not null
);

create table pergunta (
    idpergunta int primary key auto_increment,
    enunciado varchar(255) not null
);

create table alternativas (
    idalternativas int primary key auto_increment,
    texto varchar(100) not null,
    correta tinyint not null,
    fkpergunta int,
    foreign key (fkpergunta) references pergunta(idpergunta)
);

create table relatorio (
    idrelatorio int primary key auto_increment,
    acertos int default 0,
    erros int default 0,
    datarealizacao datetime default current_timestamp,
    fkusuario int,
    foreign key (fkusuario) references usuario(idusuario)
);

insert into pergunta (enunciado) values 
('Qual foi o primeiro modelo de produção da Porsche?'),
('Em que ano a Porsche foi fundada?'),
('Qual modelo é considerado o ícone da Porsche?'),
('O que significa o emblema da Porsche?'),
('Qual o motor padrão do Porsche 911 clássico?'),
('Qual é o carro de corrida mais famoso da Porsche na história?'),
('Qual modelo Porsche é um SUV de alto desempenho?'),
('Qual motorização utiliza o Porsche Taycan?'),
('Qual é o significado do nome Carrera na Porsche?'),
('Onde fica a sede da Porsche?'),
('Qual modelo Porsche foi desenhado como um carro acessível nos anos 70?'),
('O que é o sistema PDK da Porsche?'),
('Qual modelo Porsche é um hipercarro híbrido icônico?'),
('Qual país é o lar da Porsche?'),
('O que significa a sigla GT3 na Porsche?'),
('Qual modelo Porsche tem motor central traseiro?'),
('Qual é o Porsche mais barato atualmente?'),
('Qual Porsche é conhecido como "Widowmaker"?'),
('Quem fundou a Porsche?'),
('Qual Porsche foi produzido em parceria com a Volkswagen?'),
('Qual modelo Porsche é um sedã esportivo?'),
('Qual é a sigla para o sistema de tração integral da Porsche?'),
('O que diferencia o Porsche 911 Turbo dos outros 911?'),
('Em que cidade alemã a Porsche tem sua fábrica principal?'),
('Qual Porsche clássico tem motor dianteiro?'),
('Qual é o modelo Porsche que foca em uso diário de luxo?'),
('Como é chamado o sistema de suspensão ativa da Porsche?'),
('Qual Porsche detém recordes em Nürburgring?'),
('Qual é o primeiro carro totalmente elétrico da Porsche?'),
('Qual Porsche é conhecido por ser um "super esportivo" de entrada?');

insert into alternativas (texto, correta, fkpergunta) values
('Porsche 356', 1, 1), ('Porsche 911', 0, 1), ('Porsche 917', 0, 1), ('Porsche 924', 0, 1),
('1931', 1, 2), ('1948', 0, 2), ('1963', 0, 2), ('1920', 0, 2),
('911', 1, 3), ('Cayenne', 0, 3), ('Panamera', 0, 3), ('Boxster', 0, 3),
('Brasão de Stuttgart', 1, 4), ('Simbolo de velocidade', 0, 4), ('Nome do fundador', 0, 4), ('Logo de uma corrida', 0, 4),
('Boxer 6 cilindros', 1, 5), ('V8', 0, 5), ('4 cilindros em linha', 0, 5), ('V12', 0, 5),
('Porsche 917', 1, 6), ('Porsche 911', 0, 6), ('Porsche 956', 0, 6), ('Porsche 962', 0, 6),
('Cayenne', 1, 7), ('Panamera', 0, 7), ('Macan', 0, 7), ('Taycan', 0, 7),
('Elétrico', 1, 8), ('Híbrido', 0, 8), ('Gasolina', 0, 8), ('Diesel', 0, 8),
('Corrida', 1, 9), ('Velocidade', 0, 9), ('Luxo', 0, 9), ('Elegância', 0, 9),
('Stuttgart', 1, 10), ('Berlim', 0, 10), ('Munique', 0, 10), ('Frankfurt', 0, 10),
('Porsche 914', 1, 11), ('Porsche 911', 0, 11), ('Porsche 356', 0, 11), ('Porsche 928', 0, 11),
('Transmissão de dupla embreagem', 1, 12), ('Sistema de freios', 0, 12), ('Direção assistida', 0, 12), ('Motor turbo', 0, 12),
('918 Spyder', 1, 13), ('Carrera GT', 0, 13), ('959', 0, 13), ('911 GT3', 0, 13),
('Alemanha', 1, 14), ('Áustria', 0, 14), ('Itália', 0, 14), ('Estados Unidos', 0, 14),
('Gran Turismo 3', 1, 15), ('Grand Touring', 0, 15), ('Grande Turbo', 0, 15), ('Grande Tração', 0, 15),
('718 Cayman', 1, 16), ('911', 0, 16), ('Panamera', 0, 16), ('Macan', 0, 16),
('Macan', 1, 17), ('Cayenne', 0, 17), ('718 Cayman', 0, 17), ('Boxster', 0, 17),
('911 Turbo', 1, 18), ('GT3 RS', 0, 18), ('Carrera GT', 0, 18), ('Cayenne', 0, 18),
('Ferdinand Porsche', 1, 19), ('Ferry Porsche', 0, 19), ('Karl Porsche', 0, 19), ('August Porsche', 0, 19),
('Porsche 914', 1, 20), ('Porsche 924', 0, 20), ('Porsche 944', 0, 20), ('Porsche 928', 0, 20),
('Panamera', 1, 21), ('Taycan', 0, 21), ('Cayenne', 0, 21), ('Macan', 0, 21),
('AWD', 1, 22), ('4x4', 0, 22), ('4WD', 0, 22), ('Traction Plus', 0, 22),
('Turbocompressor', 1, 23), ('Motor maior', 0, 23), ('Mais luxo', 0, 23), ('Cor exclusiva', 0, 23),
('Stuttgart', 1, 24), ('Leipzig', 0, 24), ('Wolfsburg', 0, 24), ('Berlim', 0, 24),
('Porsche 928', 1, 25), ('Porsche 911', 0, 25), ('Porsche 356', 0, 25), ('Porsche 914', 0, 25),
('Cayenne', 1, 26), ('Macan', 0, 26), ('Panamera', 0, 26), ('911', 0, 26),
('PASM', 1, 27), ('PDK', 0, 27), ('PSM', 0, 27), ('PCM', 0, 27),
('911 GT3 RS', 1, 28), ('911 Turbo', 0, 28), ('918 Spyder', 0, 28), ('Cayman', 0, 28),
('Taycan', 1, 29), ('Macan Electric', 0, 29), ('Panamera E-Hybrid', 0, 29), ('911 E', 0, 29),
('718 Cayman', 1, 30), ('Macan', 0, 30), ('Cayenne', 0, 30), ('Panamera', 0, 30);

select * from usuario;

INSERT INTO usuario (nome, email, senha) VALUES ('teste', 'teste@teste.com', '123456');