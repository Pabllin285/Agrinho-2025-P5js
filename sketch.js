let perguntas = [
  { 
    pergunta: "Qual a melhor forma de preservar o solo agrícola?", 
    alternativas: ["Rotação de culturas", "Uso excessivo de fertilizantes", "Queimada controlada", "Irrigação exagerada"],
    correta: "Rotação de culturas"
  },
  { 
    pergunta: "O que fazer com resíduos orgânicos na fazenda?", 
    alternativas: ["Fazer compostagem", "Jogar no rio", "Queimar sem controle", "Enterrar sem tratamento"],
    correta: "Fazer compostagem"
  },
  { 
    pergunta: "Qual ação reduz a emissão de gases do efeito estufa?", 
    alternativas: ["Plantar árvores", "Usar veículos movidos a combustíveis fósseis", "Produzir energia com carvão", "Desmatar áreas de vegetação"],
    correta: "Plantar árvores"
  },
  { 
    pergunta: "Qual método evita o desperdício de água na irrigação?", 
    alternativas: ["Gotejamento", "Aspersão em excesso", "Irrigação por inundação", "Uso descontrolado de água"],
    correta: "Gotejamento"
  }
];

let perguntaAtual = 0;
let sustentabilidade = 100;
let jogoIniciado = false;
let jogoFinalizado = false;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0); 

  if (!jogoIniciado) {
    telaInicial();
  } else if (jogoFinalizado) {
    telaFinal();
  } else {
    jogoRodando();
  }
}

function telaInicial() {
  fill(255);
  textSize(20);
  text("Desafio da Sustentabilidade", width / 2, height / 3);
  
  fill(0, 255, 0);
  rect(width / 2 - 75, height / 2, 150, 50);
  
  fill(255);
  textSize(18);
  text("Jogar", width / 2, height / 2 + 25);
}

function jogoRodando() {
  fill(255);
  textSize(18);
  textAlign(CENTER, TOP);
  text(perguntas[perguntaAtual].pergunta, width / 2, 20);

  textSize(14);
  textAlign(LEFT, TOP);
  text("Sustentabilidade: " + sustentabilidade, 50, 350);

  for (let i = 0; i < 4; i++) {
    let y = 120 + i * 60;
    fill(100);
    rect(width / 2 - 250, y, 500, 50);
    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text(perguntas[perguntaAtual].alternativas[i], width / 2, y + 25);
  }
}

function telaFinal() {
  fill(255);
  textSize(24);
  text("Fim do jogo!", width / 2, height / 3);
  
  textSize(18);
  text("Sua sustentabilidade final foi: " + sustentabilidade, width / 2, height / 2);
  
  textSize(16);
  text("Obrigado por jogar e aprender sobre sustentabilidade!", width / 2, height / 1.5);
}

function mousePressed() {
  if (!jogoIniciado) {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
        mouseY > height / 2 && mouseY < height / 2 + 50) {
      jogoIniciado = true;
    }
  } else if (!jogoFinalizado) {
    for (let i = 0; i < 4; i++) {
      let y = 120 + i * 60;
      if (mouseX > width / 2 - 250 && mouseX < width / 2 + 250 &&
          mouseY > y && mouseY < y + 50) {
        if (perguntas[perguntaAtual].alternativas[i] === perguntas[perguntaAtual].correta) {
          sustentabilidade += 15;
        } else {
          sustentabilidade -= 20;
        }
        proximaPergunta();
      }
    }
  }
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) {
    jogoFinalizado = true; // Exibe a tela final
  }
}
