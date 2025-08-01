const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "*Por que é importante conservar a água?",
        alternativas: 
            {
                texto: "Isso é importante!",
                afirmacao: "A conservação da água é essencial porque ela é um recurso finito e fundamental para a vida. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: " A água potável escassa pode levar a sérios problemas de saúde, agricultura e economia. Além disso, a conservação ajuda a proteger os ecossistemas aquáticos.
."
            }
        ]
    },
    {
        enunciado: "*O que é o meio ambiente?*",
        alternativas: 
            {
                texto: " O meio ambiente é o conjunto de todas as condições e influências que cercam e afetam um organismo vivo. Ele inclui fatores biológicos (como outros seres vivos) e abióticos (como a água, o solo, o ar e o clima). Basicamente, é tudo o que existe na Terra e que interage de alguma forma.

.
."
                afirmacao: "Conseguiu utilizar a métodos para buscar informações úteis."
            },
            {
                texto: "O que é o efeito estufa?",
                afirmacao: "A pegada de carbono é a quantidade total de gases de efeito estufa (GEE) gerados por nossas ações, como o dióxido de carbono (CO 
2
​
 ) e o metano (CH 
4
​
 ). Ela pode ser calculada para uma pessoa, uma empresa, um produto ou até mesmo um país, e serve para medir o impacto que causamos no meio ambiente através de nossas atividades diárias, como usar o carro, consumir energia ou comprar alimentos.."
            }
        ]
    },
    {
        enunciado: "O que é o efeito estufa?",
        alternativas: 
            {
                texto: "O efeito estufa é um processo natural e vital para a vida na Terra. Ele ocorre quando a atmosfera retém parte do calor do sol, mantendo o planeta aquecido o suficiente para a existência de água líquida e de vida. No entanto, o excesso de gases de efeito estufa emitidos pelas atividades humanas (como a queima de combustíveis fósseis) intensifica esse efeito, causando o aquecimento global.."
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Quais são as principais fontes de poluição da água?
?",
        alternativas: [
            {
                texto: "."
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Como posso ajudar a proteger o meio ambiente no dia a dia?? ",
        alternativas: [
            {
                texto: "Existem várias ações que você pode tomar, como:

Reduzir, Reutilizar e Reciclar (os 3 R's).

Economizar água e energia em casa.

Reduzir o consumo de carne, já que a pecuária é uma grande fonte de gases de efeito estufa..",
                afirmacao: "Utilizar menos o carro e optar por andar de bicicleta, caminhar ou usar o transporte público.

Plantar árvores e apoiar iniciativas de conservação.

Escolher produtos com embalagens sustentáveis e de empresas que se preocupam com o meio ambiente.."
            },
            {
                texto: "O que é biodiversidade?"
                afirmacao: "A biodiversidade é a variedade de vida na Terra em todos os seus níveis, desde a diversidade genética dentro de uma espécie até a variedade de ecossistemas (como florestas, oceanos e desertos). Proteger a biodiversidade é fundamental para a saúde do planeta, pois cada espécie e ecossistema desempenha um papel importante na manutenção do equilíbrio natural.

. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();