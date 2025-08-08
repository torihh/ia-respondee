const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua principal preocupação sobre o meio ambiente?",
        alternativas: [
            {
                texto: "A poluição da água.",
                afirmacao: "A poluição da água é um problema grave, afetando a saúde humana e a vida selvagem. Sua preocupação é válida."
            },
            {
                texto: "O desmatamento.",
                afirmacao: "O desmatamento é uma das maiores causas da perda de biodiversidade e das mudanças climáticas. Sua preocupação demonstra grande consciência."
            }
        ]
    },
    {
        enunciado: "O que é o efeito estufa e por que ele é importante?",
        alternativas: [
            {
                texto: "É um processo natural que mantém a Terra aquecida.",
                afirmacao: "O efeito estufa é um processo natural vital. Sem ele, a Terra seria fria demais para a vida, mas o excesso de gases causa o aquecimento global."
            },
            {
                texto: "É a camada de ozônio que protege a Terra.",
                afirmacao: "A camada de ozônio protege contra raios UV, mas o efeito estufa é a retenção de calor na atmosfera. Sua resposta mostra interesse em entender os diferentes fenômenos atmosféricos."
            }
        ]
    },
    {
        enunciado: "Qual a sua atitude para proteger o meio ambiente no dia a dia?",
        alternativas: [
            {
                texto: "Reciclo o lixo e evito o desperdício.",
                afirmacao: "A reciclagem e a redução do desperdício são atitudes essenciais. Pequenas ações diárias somam-se a um grande impacto positivo."
            },
            {
                texto: "Economizo água e energia em casa.",
                afirmacao: "Economizar recursos como água e energia é fundamental. Isso reduz a pressão sobre os ecossistemas e diminui a pegada de carbono."
            }
        ]
    },
    {
        enunciado: "O que você faria para conscientizar outras pessoas?",
        alternativas: [
            {
                texto: "Conversaria com amigos e familiares sobre o tema.",
                afirmacao: "Conversar com pessoas próximas é uma forma poderosa de espalhar a conscientização. A mudança começa no nosso círculo social."
            },
            {
                texto: "Apoiaria projetos e ONGs ambientais.",
                afirmacao: "Apoiar iniciativas organizadas é crucial para causas maiores. Sua atitude de suporte fortalece a luta pela proteção ambiental em escala."
            }
        ]
    },
    {
        enunciado: "O que você acha da ideia de um futuro mais sustentável?",
        alternativas: [
            {
                texto: "É essencial para a sobrevivência do planeta.",
                afirmacao: "A busca por um futuro sustentável é a chave para garantir um planeta saudável para as próximas gerações. Sua visão é muito importante para o nosso futuro."
            },
            {
                texto: "É um desafio que podemos superar juntos.",
                afirmacao: "A sustentabilidade é, sem dúvida, um grande desafio, mas a colaboração e o esforço conjunto podem superá-lo. Sua confiança em ações coletivas é inspiradora."
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
    caixaPerguntas.textContent = "O seu compromisso com o meio ambiente constrói um futuro mais verde!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();