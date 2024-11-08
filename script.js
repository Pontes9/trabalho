eufunction escolherBuraco() {
    document.getElementById("story").textContent = 
        "Você entrou no buraco e encontrou uma salamandra dormindo. Você pode tentar roubar seu óculos ou sair correndo.";
    document.querySelector(".choices").innerHTML = `
        <button onclick="roubarÓculos()">Roubar o óculos</button>
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

// Opções dentro do buraco
function roubarÓculos() {
    document.getElementById("story").textContent = 
        "Você tentou roubar o óculos, mas a salamandra despertou! O que você vai fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="lutarComEla()">Lutar com a salamandra</button>
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

// Respostas dentro do buraco
function lutarComSalamandra() {
    document.getElementById("story").textContent = 
        "Você lutou bravamente, mas a salamandra sabia kungfuu e te venceu. Fim da história.";
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

// Opções no jardim
function escolherNuvemFlutuante() {
    document.getElementById("story").textContent = 
        "Você seguiu pela nuvem flutuante e viu uma sombra azul. tem um formato meio bizarro. O que você faz?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="irInvestigar()">Investigar</button>
        <button onclick="chamar()">chamar</button>
    `;
}

function Escada() {
    document.getElementById("story").textContent = 
        "Você seguiu pela escada e se encontrou com um duende, ele disse para escolher um número ou vc irá morrer. qual número vc escolhe 1 ou 2?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="número1()">1</button>
        <button onclick="número2()">2</button>
    `;
}

// Respostas no jardim
function investigar() {
    document.getElementById("story").textContent = 
        "Você encontrou uma sala cheia de cobras, mas ao entrar nela você foi picado. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function Chamar() {
    document.getElementById("story").textContent = 
        "Era um homem, ele veio até sua direção e disse que lhe deixaria rico. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function número1() {
    document.getElementById("story").textContent = 
        "ele disse que você escolheu errado e em seguida cravou uma adaga no seu peito! Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function número2() {
    document.getElementById("story").textContent = 
        "Você escolheu certo, ele lhe entregou um pote de moedas. Fim da história.";
    document.querySelector(".choices").innerHTML = '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
    document.getElementById("story").textContent = 
             "Você está em frente a um buraco escuro e um jardim. O que você deseja fazer?";
    document.querySelector(".choices").innerHTML = `
        <button onclick="escolherBuraco()">Entrar no buraco</button>
        <button onclick="escolherJardim()">Ir para o jardim</button>
    `;
}
