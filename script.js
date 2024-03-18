const palavras = {
    animais: [
      { palavra: "macaco", dica: "Vive em árvores e é conhecido por sua agilidade." },
      { palavra: "cavalo", dica: "É um animal usado como meio de transporte e para trabalho." },
      { palavra: "cachorro", dica: "É conhecido como o melhor amigo do homem." },
      { palavra: "gato", dica: "É um animal doméstico comum conhecido por sua independência." },
      { palavra: "coelho", dica: "É um animal de pequeno porte conhecido por suas orelhas longas." },
      { palavra: "pássaro", dica: "É uma ave que tem a capacidade de voar." },
      { palavra: "cobra", dica: "É uma espécie de réptil comumente associada à veneno." },
      { palavra: "leão", dica: "É um felino conhecido por sua juba e por ser o (rei) da selva." },
      { palavra: "tigre", dica: "É um grande felino listrado, conhecido por sua força e agilidade." },
      { palavra: "urso", dica: "É um mamífero carnívoro de grande porte, conhecido por sua força." }
    ],
    cores: [
      { palavra: "branco", dica: "É uma cor que representa pureza e paz." },
      { palavra: "preto", dica: "É a ausência de cor, absorve toda a luz visível." },
      { palavra: "vermelho", dica: "É a cor do sangue e do fogo, associada a paixão e energia." },
      { palavra: "azul", dica: "É uma cor fria que representa tranquilidade e serenidade." },
      { palavra: "verde", dica: "É a cor da natureza, associada à esperança e renovação." },
      { palavra: "amarelo", dica: "É a cor do sol, associada à alegria e otimismo." },
      { palavra: "laranja", dica: "É uma cor vibrante, associada à criatividade e entusiasmo." },
      { palavra: "rosa", dica: "É uma cor delicada, associada à feminilidade e romance." },
      { palavra: "roxo", dica: "É uma cor associada à realeza, luxo e espiritualidade." },
      { palavra: "marrom", dica: "É uma cor terrosa, associada à estabilidade e segurança." }
    ],
    numeros: [
      { palavra: "um", dica: "É o primeiro número natural, simboliza unidade." },
      { palavra: "dois", dica: "É o número que segue o um." },
      { palavra: "três", dica: "É o número seguinte ao dois." },
      { palavra: "quatro", dica: "É o número que segue o três." },
      { palavra: "cinco", dica: "É o número que segue o quatro." },
      { palavra: "seis", dica: "É o número que segue o cinco." },
      { palavra: "sete", dica: "É o número que segue o seis." },
      { palavra: "oito", dica: "É o número que segue o sete." },
      { palavra: "nove", dica: "É o número que segue o oito." },
      { palavra: "dez", dica: "É o número que segue o nove." }
    ],
    objetos: [
      { palavra: "mesa", dica: "É um móvel com uma superfície plana, geralmente com pernas." },
      { palavra: "cadeira", dica: "É um móvel utilizado para sentar." },
      { palavra: "cama", dica: "É um móvel usado para dormir." },
      { palavra: "carro", dica: "É um veículo motorizado usado para transporte." },
      { palavra: "casa", dica: "É um edifício onde as pessoas moram." },
      { palavra: "escola", dica: "É uma instituição onde as pessoas aprendem." },
      { palavra: "hospital", dica: "É uma instituição que oferece cuidados médicos." },
      { palavra: "biblioteca", dica: "É um local onde se encontram livros para empréstimo ou consulta." },
      { palavra: "parque", dica: "É uma área pública de recreação e lazer." },
      { palavra: "praia", dica: "É uma área de areia e água no litoral." }
    ],
    corpo: [
      { palavra: "cabeça", dica: "É a parte superior do corpo, onde estão localizados o cérebro e os sentidos." },
      { palavra: "rosto", dica: "É a parte frontal da cabeça, onde estão os olhos, nariz e boca." },
      { palavra: "olhos", dica: "São os órgãos da visão." },
      { palavra: "nariz", dica: "É o órgão olfativo e respiratório." },
      { palavra: "boca", dica: "É o órgão responsável pela ingestão de alimentos e pela fala." },
      { palavra: "orelha", dica: "É o órgão responsável pela audição e equilíbrio." },
      { palavra: "pescoço", dica: "É a parte do corpo que conecta a cabeça ao tronco." },
      { palavra: "ombro", dica: "É a parte do corpo entre o pescoço e o braço." },
      { palavra: "braço", dica: "É a parte do membro superior entre o ombro e o cotovelo." },
      { palavra: "mão", dica: "É a extremidade do braço, com a qual se manipula objetos." }
    ],
    acoes: [
      { palavra: "andar", dica: "É o ato de se locomover usando as pernas." },
      { palavra: "correr", dica: "É o ato de se deslocar rapidamente usando as pernas." },
      { palavra: "falar", dica: "É o ato de emitir sons articulados para se comunicar." },
      { palavra: "cantar", dica: "É o ato de produzir sons musicais com a voz." },
      { palavra: "comer", dica: "É o ato de ingerir alimentos." },
      { palavra: "beber", dica: "É o ato de ingerir líquidos." },
      { palavra: "dormir", dica: "É o ato de descansar o corpo e a mente, geralmente durante a noite." },
      { palavra: "acordar", dica: "É o ato de despertar do sono." },
      { palavra: "ler", dica: "É o ato de interpretar e compreender um texto escrito." },
      { palavra: "escrever", dica: "É o ato de produzir textos ou símbolos usando um instrumento de escrita." }
    ],
    emocoes: [
      { palavra: "feliz", dica: "Estado emocional caracterizado por alegria e satisfação." },
      { palavra: "triste", dica: "Estado emocional caracterizado por desânimo e melancolia." },
      { palavra: "bravo", dica: "Estado emocional caracterizado por raiva e irritação." },
      { palavra: "apaixonado", dica: "Estado emocional caracterizado por um forte sentimento de amor." },
      { palavra: "assustado", dica: "Estado emocional caracterizado por medo ou susto." },
      { palavra: "surpreso", dica: "Estado emocional caracterizado por espanto ou admiração." },
      { palavra: "zangado", dica: "Estado emocional caracterizado por indignação ou irritação." },
      { palavra: "cansado", dica: "Estado físico e emocional caracterizado por falta de energia." },
      { palavra: "faminto", dica: "Estado físico caracterizado pela necessidade de alimentação." }
    ],
    tempo: [
      { palavra: "dia", dica: "Período de 24 horas, durante o qual a luz do sol é visível." },
      { palavra: "noite", dica: "Período de escuridão durante o qual a luz do sol não é visível." },
      { palavra: "manhã", dica: "Período do dia que vai do nascer do sol até o meio-dia." },
      { palavra: "tarde", dica: "Período do dia que vai do meio-dia até o pôr do sol." },
      { palavra: "semana", dica: "Período de sete dias." },
      { palavra: "mês", dica: "Período de tempo aproximadamente equivalente a um ciclo lunar." },
      { palavra: "ano", dica: "Período de tempo aproximadamente equivalente a uma translação da Terra ao redor do sol." },
      { palavra: "hora", dica: "Unidade de medida de tempo equivalente a 60 minutos." },
      { palavra: "minuto", dica: "Unidade de medida de tempo equivalente a 60 segundos." },
      { palavra: "segundo", dica: "Unidade de medida de tempo equivalente a 1/60 de um minuto." }
    ],
    clima: [
      { palavra: "sol", dica: "Estrela ao redor da qual a Terra orbita, fonte primária de luz e calor." },
      { palavra: "chuva", dica: "Precipitação de água da atmosfera em forma líquida." },
      { palavra: "vento", dica: "Movimento do ar na atmosfera." },
      { palavra: "neve", dica: "Precipitação de cristais de gelo na forma de flocos." },
      { palavra: "nuvem", dica: "Massa de vapor de água visível suspensa na atmosfera." },
      { palavra: "neblina", dica: "Suspensão de gotículas de água na atmosfera que reduzem a visibilidade." },
      { palavra: "frio", dica: "Temperatura baixa." },
      { palavra: "calor", dica: "Temperatura alta." },
      { palavra: "seco", dica: "Ausência de umidade na atmosfera." },
      { palavra: "úmido", dica: "Presença de umidade na atmosfera." }
    ],
    natureza: [
      { palavra: "flor", dica: "Órgão reprodutivo das plantas angiospermas, muitas vezes colorido e perfumado." },
      { palavra: "árvore", dica: "Planta de grande porte com caule lenhoso." },
      { palavra: "fruta", dica: "Órgão que contém as sementes de uma planta, geralmente doce e comestível." },
      { palavra: "legumes", dica: "Partes comestíveis de plantas, geralmente consumidas como alimento." },
      { palavra: "céu", dica: "Região do espaço visível da Terra, onde o sol, a lua e as estrelas estão localizados." },
      { palavra: "mar", dica: "Grande extensão de água salgada." },
      { palavra: "terra", dica: "Planeta habitado pela humanidade." },
      { palavra: "montanha", dica: "Elevação natural da superfície terrestre com uma grande altitude." },
      { palavra: "rio", dica: "Corrente natural de água que flui para um lago, mar ou oceano." },
      { palavra: "lago", dica: "Corpo de água doce, geralmente de grande extensão e cercado por terra." }
    ],
    cultura: [
      { palavra: "livro", dica: "Conjunto de páginas unidas por uma capa, contendo textos escritos." },
      { palavra: "música", dica: "Forma de expressão artística que combina sons harmoniosos." },
      { palavra: "filme", dica: "Obra cinematográfica, uma sequência de imagens em movimento." },
      { palavra: "jogo", dica: "Atividade recreativa com regras definidas e um objetivo a ser alcançado." },
      { palavra: "esporte", dica: "Atividade física competitiva que envolve habilidades motoras e estratégia." },
      { palavra: "dança", dica: "Forma de expressão artística que envolve movimentos corporais ritmados." },
      { palavra: "pintura", dica: "Forma de arte visual que utiliza cores e pigmentos para criar imagens." },
      { palavra: "teatro", dica: "Forma de arte performática que envolve atuação diante de um público ao vivo." },
      { palavra: "fotografia", dica: "Técnica de capturar imagens usando luz e câmeras." },
      { palavra: "culinária", dica: "Arte de cozinhar e preparar alimentos." }
    ],
    geografia: [
      { palavra: "cidade", dica: "Área urbana densamente povoada, com infraestrutura desenvolvida." },
      { palavra: "campo", dica: "Área rural com terreno aberto e cultivado." },
      { palavra: "praia", dica: "Faixa de areia ao longo da costa do mar ou de um lago." },
      { palavra: "floresta", dica: "Ecossistema com árvores densamente agrupadas." },
      { palavra: "deserto", dica: "Região árida com pouca precipitação e vegetação escassa." },
      { palavra: "montanha", dica: "Formação geológica elevada, geralmente com pico pontiagudo." },
      { palavra: "oceano", dica: "Grande corpo de água salgada que cobre a maior parte da superfície terrestre." },
      { palavra: "continente", dica: "Grande massa de terra separada por oceanos." },
      { palavra: "planeta", dica: "Corpo celeste que orbita uma estrela, como a Terra." },
      { palavra: "galáxia", dica: "Conjunto de estrelas, nuvens de gás, poeira cósmica e matéria escura." }
    ],
    profissoes:[
      { palavra: "médico", dica: "Profissional da área da saúde responsável pelo diagnóstico, tratamento e prevenção de doenças." },
      { palavra: "engenheiro", dica: "Profissional que aplica conhecimentos científicos e matemáticos para desenvolver soluções tecnológicas." },
      { palavra: "advogado", dica: "Profissional que atua na área jurídica, representando e defendendo os interesses de indivíduos e empresas." },
      { palavra: "professor", dica: "Profissional dedicado ao ensino e transmissão de conhecimento em diversas áreas do saber." },
      { palavra: "programador", dica: "Profissional que desenvolve software, escrevendo códigos para computadores e sistemas." },
      { palavra: "arquiteto", dica: "Profissional responsável pelo planejamento e design de edifícios e espaços urbanos." },
      { palavra: "enfermeiro", dica: "Profissional de saúde que presta cuidados diretos e assistência a pacientes." },
      { palavra: "contador", dica: "Profissional responsável por organizar e analisar informações financeiras de empresas e indivíduos." },
      { palavra: "designer", dica: "Profissional que cria soluções visuais e funcionais para produtos, comunicações e ambientes." },
      { palavra: "chef de cozinha", dica: "Profissional especializado na preparação de alimentos e no planejamento de cardápios." }
  ]

  };
  
  let palavraAtualIndex = -1;
  let palavraSelecionada = "";
  let palavraExibida = "";
  let tentativasRestantes = 6;
  let pontuacao = 0;
  
  const hangmanDisplay = document.getElementById("hangmanDisplay");
  const guessInput = document.getElementById("guessInput");
  const attemptsSpan = document.getElementById("attempts");
  const scoreSpan = document.getElementById("score");
  const resultDiv = document.getElementById("result");
  const hintDiv = document.getElementById("hint");
  
  function proximaPalavra() {
    palavraAtualIndex++;
    if (palavraAtualIndex >= palavras.animais.length) {
      palavraAtualIndex = 0; // Reinicia o jogo se todas as palavras foram adivinhadas
      // Embaralha as palavras de todas as categorias
      for (const categoria in palavras) {
        shuffleArray(palavras[categoria]);
      }
    }
    const categoriaAtual = Object.keys(palavras)[palavraAtualIndex];
    palavraSelecionada = palavras[categoriaAtual][palavraAtualIndex].palavra;
    palavraExibida = palavraSelecionada.replace(/\w/g, "_");
    hangmanDisplay.textContent = palavraExibida;
    hintDiv.textContent = "Dica: " + palavras[categoriaAtual][palavraAtualIndex].dica;
  }
  
  // Função para embaralhar um array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function atualizarPontuacao() {
    pontuacao++;
    scoreSpan.textContent = pontuacao;
  }
  
  function resetarJogo() {
    tentativasRestantes = 6;
    attemptsSpan.textContent = tentativasRestantes;
    pontuacao = 0;
    scoreSpan.textContent = pontuacao;
    proximaPalavra();
    resultDiv.textContent = "";
  }
  
  function adivinharLetra(letra) {
    if (palavraSelecionada.includes(letra)) {
      palavraExibida = palavraSelecionada.split("").map((l, i) => {
        return l === letra ? letra : palavraExibida[i];
      }).join("");
      hangmanDisplay.textContent = palavraExibida;
  
      if (palavraExibida === palavraSelecionada) {
        resultDiv.textContent = "Parabéns, você venceu!";
        resultDiv.style.color = "green";
        atualizarPontuacao();
        setTimeout(proximaPalavra, 2000); // Aguarda 2 segundos antes de passar para a próxima palavra
      }
    } else {
      tentativasRestantes--;
      attemptsSpan.textContent = tentativasRestantes;
  
      if (tentativasRestantes === 0) {
        resultDiv.textContent = "Você perdeu. A palavra era: " + palavraSelecionada;
        resultDiv.style.color = "red";
        setTimeout(resetarJogo, 2000); // Aguarda 2 segundos antes de reiniciar o jogo
      }
    }
  }
  
  guessInput.addEventListener("input", function() {
    const palpite = guessInput.value.toLowerCase();
    guessInput.value = "";
  
    if (palpite) {
      adivinharLetra(palpite);
    }
  });
  
  resetarJogo();
  