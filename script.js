const quizConhecimentoPerguntas = [
    {
        pergunta: "1. Qual objeto pode matar um Vampiro Original?",
        opcoes: ["Estaca de Carvalho Branco", "Verbena", "Prata", "Água Benta"],
        resposta: "Estaca de Carvalho Branco"
    },
    {
        pergunta: "2. Qual é o nome da cidade fictícia onde a série se passa?",
        opcoes: ["New Orleans", "Beacon Hills", "Mystic Falls", "Riverdale"],
        resposta: "Mystic Falls"
    },
    {
        pergunta: "3. Qual sobrenome é frequentemente associado a duplicatas?",
        opcoes: ["Salvatore", "Forbes", "Petrova", "Mikaelson"],
        resposta: "Petrova"
    },
    {
        pergunta: "4. Quem é o Híbrido Original?",
        opcoes: ["Elijah", "Kol", "Klaus", "Finn"],
        resposta: "Klaus"
    },
    {
        pergunta: "5. O que enfraquece os lobisomens?",
        opcoes: ["Verbena", "Madeira", "Acônito (Wolfsbane)", "Luz solar"],
        resposta: "Acônito (Wolfsbane)"
    },
    {
        pergunta: "6. Qual dos irmãos Salvatore foi transformado primeiro?",
        opcoes: ["Damon", "Stefan", "Os dois ao mesmo tempo", "Giuseppe"],
        resposta: "Stefan"
    },
    {
        pergunta: "7. Qual é o nome completo da mãe dos Originais?",
        opcoes: ["Ayana", "Qetsiyah", "Dahlia", "Esther Mikaelson"],
        resposta: "Esther Mikaelson"
    },
    {
        pergunta: "8. Quem era a duplicata que amaldiçoou Klaus?",
        opcoes: ["Elena", "Tatia", "Amara", "Katherine"],
        resposta: "Tatia"
    },
    {
        pergunta: "9. Qual personagem se torna um caçador de vampiros sobrenaturalmente ligado?",
        opcoes: ["Matt Donovan", "Alaric Saltzman", "Jeremy Gilbert", "Tyler Lockwood"],
        resposta: "Jeremy Gilbert"
    },
    {
        pergunta: "10. Qual é o nome do lado sombrio de Stefan (quando ele perde o controle)?",
        opcoes: ["O Sangrento", "O Destruidor", "O Estripador", "O Cruel"],
        resposta: "O Estripador"
    },
    {
        pergunta: "11. Qual Original é conhecido por ser o mais honrado e vestir ternos?",
        opcoes: ["Klaus", "Kol", "Elijah", "Finn"],
        resposta: "Elijah"
    },
    {
        pergunta: "12. Qual é a principal fraqueza dos vampiros (comuns)?",
        opcoes: ["Sal", "Luz solar (sem anel)", "Prata", "Água Benta"],
        resposta: "Luz solar (sem anel)"
    },
    {
        pergunta: "13. Qual é o nome da primeira duplicata de Elena?",
        opcoes: ["Tatia Petrova", "Amara", "Katherine Pierce", "Qetsiyah"],
        resposta: "Katherine Pierce"
    },
    {
        pergunta: "14. Quem é o grande amor da bruxa Bonnie Bennett?",
        opcoes: ["Jeremy Gilbert", "Enzo St. John", "Kai Parker", "Matt Donovan"],
        resposta: "Enzo St. John"
    },
    {
        pergunta: "15. Qual personagem se tornou vampira após um acidente de carro, morrendo com sangue de vampiro no sistema?",
        opcoes: ["Elena", "Jenna", "Caroline", "Vicki"],
        resposta: "Caroline"
    }
];




const quizContainerConhecimento = document.getElementById('quiz-container-conhecimento');
const resultadoDivConhecimento = document.getElementById('resultado-conhecimento');




function construirQuizConhecimento() {
    const output = [];
    quizConhecimentoPerguntas.forEach((perguntaAtual, numeroPergunta) => {
        const opcoes = perguntaAtual.opcoes.map((opcao) => {
            return `<label>
                        <input type="radio" name="conhecimentoPergunta${numeroPergunta}" value="${opcao}">
                        ${opcao}
                    </label>`;
        });




        output.push(
            `<div class="pergunta-quiz">
                <h3>${perguntaAtual.pergunta}</h3>
                <div class="opcoes">${opcoes.join('')}</div>
            </div>`




        );
    });
    quizContainerConhecimento.innerHTML = output.join('');
}




function enviarQuizConhecimento() {
    const seletoresDeOpcoes = quizContainerConhecimento.querySelectorAll('.opcoes');
    let respostasCorretas = 0;
    let todasRespondidas = true;




    quizConhecimentoPerguntas.forEach((perguntaAtual, numeroPergunta) => {
        const seletor = `input[name=conhecimentoPergunta${numeroPergunta}]:checked`;
        const respostaUsuario = (seletoresDeOpcoes[numeroPergunta].querySelector(seletor) || {}).value;




        // Limpar estilos anteriores
        seletoresDeOpcoes[numeroPergunta].querySelectorAll('label').forEach(label => {
            label.style.backgroundColor = 'transparent';
        });




        if (!respostaUsuario) {
            todasRespondidas = false;
            return;
        }




        if (respostaUsuario === perguntaAtual.resposta) {
            respostasCorretas++;
            const labelCorreta = seletoresDeOpcoes[numeroPergunta].querySelector(`input[value="${perguntaAtual.resposta}"]`).parentNode;
            labelCorreta.style.backgroundColor = 'rgba(50, 150, 50, 0.3)';
        } else {
            const labelIncorreta = seletoresDeOpcoes[numeroPergunta].querySelector(`input[value="${respostaUsuario}"]`);
            if (labelIncorreta) {
                labelIncorreta.parentNode.style.backgroundColor = 'rgba(150, 50, 50, 0.3)';
            }
            const labelCorreta = seletoresDeOpcoes[numeroPergunta].querySelector(`input[value="${perguntaAtual.resposta}"]`).parentNode;
            labelCorreta.style.backgroundColor = 'rgba(50, 150, 50, 0.3)';
        }
    });




    if (!todasRespondidas) {
        resultadoDivConhecimento.innerHTML = "Por favor, responda a **todas** as 15 perguntas do Quiz de Conhecimento.";
        resultadoDivConhecimento.style.display = 'block';
        return;
    }




    resultadoDivConhecimento.innerHTML = `Você acertou **${respostasCorretas}** de **${quizConhecimentoPerguntas.length}** perguntas!`;
    if (respostasCorretas >= 13) {
        resultadoDivConhecimento.innerHTML += "<p>Você é um Mestre de Mystic Falls! Quase um Original!</p>";
    }
    resultadoDivConhecimento.style.display = 'block';
}








// --- NOVO QUIZ: QUAL ESPÉCIE VOCÊ SERIA? (15 PERGUNTAS) ---




const quizEspeciePerguntas = [
    {
        pergunta: "1. Qual é a sua principal motivação na vida?",
        opcoes: [
            { texto: "Manter a ordem e proteger os inocentes.", valor: "CAÇADOR" },
            { texto: "Buscar a felicidade e o romance eterno.", valor: "VAMPIRO" },
            { texto: "Proteger minha família e minha linhagem.", valor: "LOBSOMEN" },
            { texto: "Ter o poder de escolher meu próprio destino.", valor: "HIBRIDO" },
            { texto: "Dominar as forças da natureza.", valor: "BRUXO" },
            { texto: "Viver plenamente e envelhecer em paz.", valor: "HUMANO" }
        ],
        nome: "motivacao"
    },
    {
        pergunta: "2. Como você reagiria se fosse traído(a)?",
        opcoes: [
            { texto: "Cortaria completamente a pessoa da minha vida, para sempre.", valor: "VAMPIRO" },
            { texto: "Planejaria uma vingança lenta e cruel.", valor: "LOBSOMEN" },
            { texto: "Perdoaria, mas com muito custo, focando na razão.", valor: "HUMANO" },
            { texto: "Usaria minha força para eliminar a ameaça imediatamente.", valor: "CAÇADOR" },
            { texto: "Usaria feitiços para amaldiçoar ou bloquear o traidor.", valor: "BRUXO" },
            { texto: "Lidaria com a dor de forma explosiva e imprevisível.", valor: "HIBRIDO" }
        ],
        nome: "traicao"
    },
    {
        pergunta: "3. Qual é o seu maior medo?",
        opcoes: [
            { texto: "Perder quem eu amo e ficar sozinho(a) pela eternidade.", valor: "VAMPIRO" },
            { texto: "Perder o controle das minhas emoções e das minhas ações.", valor: "LOBSOMEN" },
            { texto: "Morrer sem nunca ter vivido uma vida plena.", valor: "HUMANO" },
            { texto: "Ter meu poder removido ou silenciado.", valor: "BRUXO" },
            { texto: "Ser dominado(a) ou subjugado(a) por uma força maior.", valor: "HIBRIDO" },
            { texto: "Falhar na minha missão e ver o mal vencer.", valor: "CAÇADOR" }
        ],
        nome: "medo"
    },
    {
        pergunta: "4. Qual arma ou objeto de defesa você prefere?",
        opcoes: [
            { texto: "Uma estaca de madeira afiada.", valor: "VAMPIRO" },
            { texto: "Um medalhão ou anel com proteção mágica.", valor: "BRUXO" },
            { texto: "Um arco e flecha ou uma arma de fogo.", valor: "CAÇADOR" },
            { texto: "Garras e presas (ou seja, força bruta).", valor: "LOBSOMEN" },
            { texto: "Qualquer arma, desde que eu possa usá-la com velocidade e força aprimoradas.", valor: "HIBRIDO" },
            { texto: "Nenhuma, eu confio na minha inteligência.", valor: "HUMANO" }
        ],
        nome: "arma"
    },
    {
        pergunta: "5. Em uma luta, sua primeira reação é:",
        opcoes: [
            { texto: "Analisar as fraquezas do inimigo antes de agir.", valor: "CAÇADOR" },
            { texto: "Usar a velocidade para imobilizar e dominar.", valor: "VAMPIRO" },
            { texto: "Pedir ajuda e tentar encontrar uma saída pacífica.", valor: "HUMANO" },
            { texto: "Atacar com fúria e sem pensar nas consequências.", valor: "LOBSOMEN" },
            { texto: "Criar uma barreira protetora para me defender.", valor: "BRUXO" },
            { texto: "Usar o choque e a intimidação para vencer.", valor: "HIBRIDO" }
        ],
        nome: "luta"
    },
    {
        pergunta: "6. Qual estação do ano melhor representa seu humor?",
        opcoes: [
            { texto: "Outono: Nostálgico, melancólico e contemplativo.", valor: "VAMPIRO" },
            { texto: "Inverno: Forte, isolado e perigoso.", valor: "CAÇADOR" },
            { texto: "Verão: Selvagem, quente e cheio de energia.", valor: "LOBSOMEN" },
            { texto: "Primavera: Equilibrado, cheio de potencial e renascimento.", valor: "BRUXO" },
            { texto: "Todas as estações: Minha personalidade muda constantemente.", valor: "HIBRIDO" },
            { texto: "Verão: Descontraído e em busca de bons momentos.", valor: "HUMANO" }
        ],
        nome: "estacao"
    },
    {
        pergunta: "7. O que você faria com a imortalidade?",
        opcoes: [
            { texto: "Passaria séculos aprendendo tudo sobre arte e história.", valor: "VAMPIRO" },
            { texto: "Passaria o tempo aperfeiçoando minhas habilidades de caça.", valor: "CAÇADOR" },
            { texto: "Recusaria ou tentaria encontrar uma forma de desfazê-la.", valor: "HUMANO" },
            { texto: "Viajaria pelo mundo em busca de novos desafios.", valor: "LOBSOMEN" },
            { texto: "A usaria para proteger aqueles que amo, custe o que custar.", valor: "HIBRIDO" },
            { texto: "Aprofundaria meu conhecimento em magias e rituais.", valor: "BRUXO" }
        ],
        nome: "imortalidade"
    },
    {
        pergunta: "8. Seu maior defeito é:",
        opcoes: [
            { texto: "Minha raiva é explosiva e incontrolável.", valor: "LOBSOMEN" },
            { texto: "Eu me sacrifico demais pelos outros.", valor: "HUMANO" },
            { texto: "Meu cinismo me faz afastar as pessoas.", valor: "VAMPIRO" },
            { texto: "Sou paranoico e não confio em ninguém.", valor: "CAÇADOR" },
            { texto: "Minha arrogância e sede por poder.", valor: "HIBRIDO" },
            { texto: "Eu me sinto culpado(a) por usar meu poder.", valor: "BRUXO" }
        ],
        nome: "defeito"
    },
    {
        pergunta: "9. Qual é o seu papel em um grupo de amigos?",
        opcoes: [
            { texto: "O protetor, sempre pronto para defender a todos.", valor: "CAÇADOR" },
            { texto: "A âncora moral, que lembra a todos o que é certo.", valor: "HUMANO" },
            { texto: "O líder sarcástico e carismático.", valor: "VAMPIRO" },
            { texto: "O emocional, que sente tudo profundamente.", valor: "LOBSOMEN" },
            { texto: "O mago ou conselheiro, que tem a solução mística.", valor: "BRUXO" },
            { texto: "O imprevisível, que muda o rumo das coisas.", valor: "HIBRIDO" }
        ],
        nome: "papel"
    },
    {
        pergunta: "10. Qual cor te atrai mais?",
        opcoes: [
            { texto: "Preto ou cinza escuro (poder e mistério).", valor: "VAMPIRO" },
            { texto: "Vermelho ou laranja (paixão e perigo).", valor: "LOBSOMEN" },
            { texto: "Verde e marrom (natureza e conexão).", valor: "BRUXO" },
            { texto: "Azul ou branco (paz e inocência).", valor: "HUMANO" },
            { texto: "Marrom e verde-oliva (utilidade e camuflagem).", valor: "CAÇADOR" },
            { texto: "Dourado (realeza e dominação).", valor: "HIBRIDO" }
        ],
        nome: "cor"
    },
    {
        pergunta: "11. Como você lida com a dor física?",
        opcoes: [
            { texto: "Sinto tudo profundamente, mas não desisto.", valor: "HUMANO" },
            { texto: "Minha capacidade de cura me permite ignorá-la.", valor: "VAMPIRO" },
            { texto: "Uso feitiços de cura ou procuro auxílio místico.", valor: "BRUXO" },
            { texto: "A dor me torna mais forte e mais furioso(a).", valor: "HIBRIDO" },
            { texto: "Aceito-a como parte da minha missão.", valor: "CAÇADOR" },
            { texto: "Sofro em silêncio até que possa me curar.", valor: "LOBSOMEN" }
        ],
        nome: "dor"
    },
    {
        pergunta: "12. Qual elemento da natureza você se sente mais conectado?",
        opcoes: [
            { texto: "Terra (estabilidade e raízes).", valor: "HUMANO" },
            { texto: "Fogo (paixão e destruição).", valor: "LOBSOMEN" },
            { texto: "Ar (velocidade e furtividade).", valor: "VAMPIRO" },
            { texto: "Água (fluxo e emoções).", valor: "BRUXO" },
            { texto: "Todos, sou a junção de vários elementos.", valor: "HIBRIDO" },
            { texto: "Apenas o necessário para me camuflar.", valor: "CAÇADOR" }
        ],
        nome: "elemento"
    },
    {
        pergunta: "13. Qual frase te define melhor?",
        opcoes: [
            { texto: "\"O amor eterno não é uma maldição, mas uma promessa.\"", valor: "VAMPIRO" },
            { texto: "\"Sou quem sou, e se você não gosta, que morra.\"", valor: "HIBRIDO" },
            { texto: "\"A justiça deve ser feita, mesmo que eu tenha que fazê-la sozinho.\"", valor: "CAÇADOR" },
            { texto: "\"Nós somos a natureza, e a natureza deve ser respeitada.\"", valor: "BRUXO" },
            { texto: "\"Minha vida é um sacrifício, mas farei isso por minha família.\"", valor: "LOBSOMEN" },
            { texto: "\"Sou apenas um humano tentando sobreviver.\"", valor: "HUMANO" }
        ],
        nome: "frase"
    },
    {
        pergunta: "14. Você é mais impulsivo ou planeja cuidadosamente?",
        opcoes: [
            { texto: "Sempre planejo, cada detalhe é importante.", valor: "CAÇADOR" },
            { texto: "Sou impulsivo(a) quando estou sob pressão.", valor: "VAMPIRO" },
            { texto: "Sou totalmente impulsivo(a) e movido(a) pela emoção.", valor: "LOBSOMEN" },
            { texto: "Depende; sou planejado(a), mas sei ser impulsivo(a) se necessário.", valor: "HIBRIDO" },
            { texto: "Planejo a curto prazo, mas não a longo prazo.", valor: "HUMANO" },
            { texto: "Planejo, mas a magia muitas vezes segue sua própria vontade.", valor: "BRUXO" }
        ],
        nome: "impulso"
    },
    {
        pergunta: "15. Se você tivesse que matar para sobreviver, você...",
        opcoes: [
            { texto: "Mataria e não sentiria remorso, pois é a regra do mundo.", valor: "HIBRIDO" },
            { texto: "Mataria, mas passaria anos me atormentando pela culpa.", valor: "VAMPIRO" },
            { texto: "Recusaria e aceitaria meu destino.", valor: "HUMANO" },
            { texto: "Mataria apenas se fosse estritamente necessário para proteger minha matilha.", valor: "LOBSOMEN" },
            { texto: "Mataria se fosse uma ameaça, pela justiça.", valor: "CAÇADOR" },
            { texto: "Tentaria encontrar um feitiço para evitar o confronto.", valor: "BRUXO" }
        ],
        nome: "matar"
    }
];




const quizContainerEspecie = document.getElementById('quiz-container-especie');
const resultadoDivEspecie = document.getElementById('resultado-especie');




function construirQuizEspecie() {
    const output = [];
    quizEspeciePerguntas.forEach((perguntaAtual) => {
        const opcoes = perguntaAtual.opcoes.map((opcao) => {
            return `<label>
                        <input type="radio" name="${perguntaAtual.nome}" value="${opcao.valor}">
                        ${opcao.texto}
                    </label>`;
        });




        output.push(
            `<div class="pergunta-quiz">
                <h3>${perguntaAtual.pergunta}</h3>
                <div class="opcoes">${opcoes.join('')}</div>
            </div>`
        );
    });
    quizContainerEspecie.innerHTML = output.join('');
}




function enviarQuizEspecie() {
    // Definindo a hierarquia de espécies para desempate
    const hierarquia = {
        'HIBRIDO': 6,
        'VAMPIRO': 5,
        'LOBSOMEN': 4,
        'BRUXO': 3,
        'CAÇADOR': 2,
        'HUMANO': 1
    };




    const contagemEspecie = { VAMPIRO: 0, LOBSOMEN: 0, BRUXO: 0, CAÇADOR: 0, HIBRIDO: 0, HUMANO: 0 };
    let respostaFaltando = false;




    quizEspeciePerguntas.forEach((perguntaAtual) => {
        const seletor = `input[name=${perguntaAtual.nome}]:checked`;
        const respostaUsuario = (quizContainerEspecie.querySelector(seletor) || {}).value;
        if (respostaUsuario) {
            contagemEspecie[respostaUsuario]++;
        } else {
            respostaFaltando = true;
        }
    });




    if (respostaFaltando) {
        resultadoDivEspecie.innerHTML = "Por favor, responda a **todas** as 15 perguntas para descobrir sua espécie.";
        resultadoDivEspecie.style.display = 'block';
        return;
    }




    let especieVencedora = '';
    let maxPontos = -1;




    for (const especie in contagemEspecie) {
        if (contagemEspecie[especie] > maxPontos) {
            maxPontos = contagemEspecie[especie];
            especieVencedora = especie;
        } else if (contagemEspecie[especie] === maxPontos) {
            // Regra especial: Empate entre VAMPIRO e LOBSOMEN resulta em HÍBRIDO
            if ((especieVencedora === 'VAMPIRO' && especie === 'LOBSOMEN') || (especieVencedora === 'LOBSOMEN' && especie === 'VAMPIRO')) {
                especieVencedora = 'HIBRIDO';
} else if (hierarquia[especie] > hierarquia[especieVencedora]) {
                // Regra geral de hierarquia em caso de empate (para forçar o mais "raro" a ganhar)
                especieVencedora = especie;
            }
        }
    }




    let mensagem;
    switch (especieVencedora) {
        case 'VAMPIRO': mensagem = "Você é um(a) Vampiro(a)! Sombrio(a), sedutor(a) e imortal. Seu desejo de amar é grande, mas sua sede é maior. Cuidado com o Estripador interior!"; break;
        case 'LOBSOMEN': mensagem = "Você é um(a) Lobisomem! Intenso(a) e leal ao seu grupo, mas sua fúria é incontrolável. Você se sente mais vivo na natureza."; break;
        case 'HIBRIDO': mensagem = "Você é um(a) Híbrido(a)! Você tem a força e a liberdade dos dois mundos, como Klaus. Quase indestrutível e com uma sede por poder incomparável!"; break;
        case 'BRUXO': mensagem = "Você é um(a) Bruxo(a)! Conectado(a) com a Natureza, seu poder é vasto, mas exige sacrifício e foco. Você é a guardiã do equilíbrio."; break;
        case 'CAÇADOR': mensagem = "Você é um(a) Caçador(a)! Determinado(a) e com um senso de justiça. Você é a linha de frente contra as trevas e não confia em ninguém."; break;
        case 'HUMANO': mensagem = "Você é um(a) Humano(a)! Sua força está na sua resiliência e compaixão. Em Mystic Falls, você é a âncora moral de todos os seres sobrenaturais."; break;
        default: mensagem = "Sua espécie é indefinida. Você é um ser novo e misterioso!"; break;
    }




    resultadoDivEspecie.innerHTML = `<h3 style="color: #ff4d4d;">🎉 Seu Resultado: ${especieVencedora}</h3><p>${mensagem}</p>`;
    resultadoDivEspecie.style.display = 'block';
}




// Inicia os Quizzes quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    construirQuizConhecimento();
    construirQuizEspecie();
});
