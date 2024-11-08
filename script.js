function escolherBUraco() {
    document.getElementById("story").textContent = 
        "Você entrou no buraco e encontrou uma salamandra dormindo. Você pode tentar roubar seu óculos ou sair correndo.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="roubarÒculos()">Roubar o óculos</button>
        <button onclick="sairCorrendo()">Sair correndo</button>
    `;
}

function escolherJardim() {
    document.getElementById("story").textContent = 
        "Você foi para a jardim e encontrou uma escada que leva para baixo e uma nuvem flutuante. Você pode seguir pela escada ou pela nuvem.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherEscada()">Seguir pela Escada</button>
        <button onclick="escolherNuvem()">Seguir pela Nuvem</button>
    `;
}

// Opções dentro da buraco
function roubarÓculos() {
    document.getElementById("story").textContent = 
        "Você tentou roubar o óculos, mas a salamandra despertou! O que você vai fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="lutarComEla()">Lutar com a sqalamandra</button>
        <button onclick="SeEsconder()">Se esconder</button>
    `;
}

function sairCorrendo() {
    document.getElementById("story").textContent = 
        "Você saiu correndo e continuou sua jornada, mas encontrou um estranho palhaço na saida do buraco. O que fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="conversarComEle()">Conversar com ele</button>
        <button onclick="irEmbora()">Ir embora</button>
    `;
}

// Respostas dentro do jardim
function lutarComSalamandra() {
    document.getElementById("story").textContent = 
        "Você lutou bravamente, mas a salamandra que sabia kungfuu. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function SeEsconder() {
    document.getElementById("story").textContent = 
        "Você se escondeu rapidamente em um buraco numa pedra, mas tinha espinhos no buraco. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function conversarComEle() {
    document.getElementById("story").textContent = 
        "O Palhaço lhe deu facadas. Agora você é um homem buraco. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function irEmbora() {
    document.getElementById("story").textContent = 
        "Você decidiu ir embora e seguiu sua jornada em paz. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

// Opções na floresta
function escolherEsquerda() {
    document.getElementById("story").textContent = 
        "Você seguiu pela esquerda e encontrou um lago mágico. Há algo brilhando no fundo. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="mergulharNoLago()">Mergulhar no lago</button>
        <button onclick="ignorarLago()">Ignorar o lago</button>
    `;
}

function escolherDireita() {
    document.getElementById("story").textContent = 
        "Você seguiu pela direita e encontrou um castelo misterioso. A porta está entreaberta. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="entrarNoCastelo()">Entrar no castelo</button>
        <button onclick="ficarFora()">Ficar do lado de fora</button>
    `;
}

// Respostas na floresta
function mergulharNoLago() {
    document.getElementById("story").textContent = 
        "Você mergulhou no lago e encontrou um tesouro escondido. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ignorarLago() {
    document.getElementById("story").textContent = 
        "Você ignorou o lago e seguiu seu caminho pela floresta. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function entrarNoCastelo() {
    document.getElementById("story").textContent = 
        "Você entrou no castelo e descobriu que ele estava assombrado! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function ficarFora() {
    document.getElementById("story").textContent = 
        "Você decidiu ficar do lado de fora do castelo e explorar o jardim. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você está em frente a uma caverna escura. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherCaverna()">Entrar na caverna</button>
        <button onclick="escolherFloresta()">Ir para a floresta</button>
    `;
}
