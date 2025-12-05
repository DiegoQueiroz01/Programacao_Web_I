const tabuleiro = document.getElementById("tabuleiro");
let posicaoJogador = 0;

// Criar 30 casas do tabuleiro.
for (let i = 0; i < 30; i++) {
    const casa = document.createElement("div");
    casa.classList.add("casa");
    casa.innerHTML = `<span>${i + 1}</span>`;
    tabuleiro.appendChild(casa);
}

function atualizarJogador() { //Atualiza a posição do jogador no tabuleiro.
    document.querySelectorAll(".casa").forEach(c => c.classList.remove("jogador"));
    document.querySelectorAll(".casa")[posicaoJogador].classList.add("jogador");

    if (posicaoJogador > 29) { //Finaliza o jogo quando posição for maior do que 29.
        finalizarJogo();
    }
}
atualizarJogador();

//Variáveis do jogo.
const botaoDado = document.getElementById("botao-dado");
const dadoDiv = document.getElementById("dado");
const eventoBox = document.getElementById("evento-box");
const eventoTexto = document.getElementById("evento-texto");
const continuarBtn = document.getElementById("continuar");

let hp = 10; //Vida do jogador.
let ouro = 0; //Ouro do jogador (Não estou usando agora para algo, mas pode ser usado depois e incluir outras mecânicas.)
let itens = []; //Também não estão sendo usados, mas podem ser úteis ao incluir mais mecânicas.

//Dado
botaoDado.addEventListener("click", () => {
    let valor = Math.floor(Math.random() * 6) + 1;

    dadoDiv.textContent = "🎲";
    dadoDiv.style.transform = "rotate(360deg)";

    setTimeout(() => {
        dadoDiv.style.transform = "rotate(0deg)";
        dadoDiv.textContent = valor;

        posicaoJogador += valor;
            if (posicaoJogador > 29) posicaoJogador = 29;

            atualizarJogador();
            // Se chegou na casa final, encerra o jogo antes de executar eventos
            if (posicaoJogador >= 29) {
                finalizarJogo();
                return;
            }
            dispararEvento();
    }, 300);
});

//Eventos
function dispararEvento(){
    const eventos = [eventoAbrigo, eventoTesouro, eventoArmadilha, eventoPergunta, eventoBatalha, eventoPergunta2]; //Eventos são escolhidos aleatóriamente.
    const escolhido = eventos[Math.floor(Math.random()*eventos.length)];
    escolhido();
}
//Funções dos eventos.
function eventoAbrigo(){
    hp += 2;
    mostrarMensagem(`Você encontrou abrigo e descansou. +2 HP (HP atual: ${hp})`);
}
function eventoTesouro(){
    let ganho = Math.floor(Math.random()*6)+2;
    ouro += ganho;
    mostrarMensagem(`Você encontrou um baú! +${ganho} ouro (Total: ${ouro}) 💰`);
}
function eventoArmadilha(){
    let dano = Math.floor(Math.random()*3)+1;
    hp -= dano;
    mostrarMensagem(`Armadilha! -${dano} HP (HP atual: ${hp}) ⚠`);
}
function eventoPergunta(){
    mostrarPergunta(
        "Você encontra uma ponte quebrada. O que faz?",
        "Tentar atravessar", () => {
            hp -= 2;
            mostrarMensagem(`Você escorregou e se feriu. -2 HP (HP: ${hp})`);
        },
        "Dar a volta", () => {
            mostrarMensagem("Você perdeu tempo, mas está seguro."); //Em uma atualização pode ser interessante incluir que aqui o jogador retorna
            //algumas casas, ou tem a possibilidade de encontrar com um bando de Orc's.
        }
    );
}
// Mini combate.
function eventoBatalha(){
    mostrarPergunta(
        "Um goblin aparece! ⚔",
        "Lutar", () => {
            let dJ = Math.floor(Math.random()*6)+1;
            let dM = Math.floor(Math.random()*6)+1;

            if(dJ >= dM){
                ouro+=3;
                mostrarMensagem(`Você venceu! +3 ouro (Total: ${ouro})`); //Os goblins podem deixar itens também úteis.
            } else {
                hp-=3;
                mostrarMensagem(`Você perdeu! -3 HP (HP: ${hp})`);
            }
        },
        "Fugir", () => {
            hp -=1;
            mostrarMensagem(`Você escapou, mas se machucou. -1 HP (HP:${hp})`);
        }
    );
}
function eventoPergunta2(){
    mostrarPergunta(
        "Você encontra um viajante ferido. Ajudar?",
        "Sim", () => {
            itens.push("Pergaminho Misterioso");
            mostrarMensagem("Ele te entrega um pergaminho misterioso!");
        },
        "Não", () => {
            mostrarMensagem("Você segue sem ajudar... algo te observa...");
        }
    );
}
//Mensagens.
function mostrarMensagem(texto){
    eventoBox.classList.remove("hidden");
    eventoBox.innerHTML = `
        <p>${texto}</p>
        <button id="continuar">Continuar</button>
    `;
    document.getElementById("continuar").onclick = () => eventoBox.classList.add("hidden");
}
function mostrarPergunta(texto, a1, ac1, a2, ac2){
    eventoBox.classList.remove("hidden");
    eventoBox.innerHTML = `
        <p>${texto}</p>
        <button id="op1">${a1}</button>
        <button id="op2">${a2}</button>
    `;

    document.getElementById("op1").onclick = () => { eventoBox.classList.add("hidden"); ac1(); };
    document.getElementById("op2").onclick = () => { eventoBox.classList.add("hidden"); ac2(); };
}

//Final do jogo.
function finalizarJogo(){
    eventoBox.classList.remove("hidden");
    eventoBox.innerHTML = `
        <h2>🏆 Missão Concluída! 🏆</h2>
        <p>Você completou sua jornada e destruiu o Anel de Poder!</p>
        <button id="btnRestart">Jogar Novamente</button>
        <button id="btnLogin">Voltar ao Login</button>
    `;

    document.getElementById("btnRestart").onclick = () =>{
        posicaoJogador = 0;
        hp = 10;
        ouro = 0;
        itens = [];
        eventoBox.classList.add("hidden");
        atualizarJogador();
    }

    document.getElementById("btnLogin").onclick = () =>{
        window.location.href="login.html";
    }
}
