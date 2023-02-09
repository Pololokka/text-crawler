var setupPronto = false;

function inicia() {
    const start = document.querySelector("[data-inicia]");
    start.addEventListener('click', () => printaTela())
}

function printaTela() {
    let generoJogo;
    nome == "" ? nome = "Astrash" : nome = nome;
    genero == "m" || genero == "M" ? generoJogo = "o" : generoJogo = "a";
    classe == undefined ? classe = "Bárbara" : classe = classe;

    calculoInicial();
    atualizaAtributo();
    atualizaBonus();
    calculaVida();
    
    const telaPrincipal = document.createElement("div");
    telaPrincipal.innerHTML = `
        <p class="texto">..${nome}, ${generoJogo} ${classe}, seja bem vind${generoJogo} ao mundo de Sveen!
        <p class="texto">.</p>
        <p class="texto">..PESCADOR: Garot${generoJogo}, o mundo está bem estranho nesses últimos tempos...
        <p class="texto">..PESCADOR: Treine com este boneco encantado antes de se aventurar.
        <p class="texto">..PESCADOR: Ele pode até te machucar, mas nada que alguém forte</p>
        <p class="texto">..como você não consiga aguentar</p>
    `

    principal.innerHTML = ""
    principal.appendChild(telaPrincipal);
    setupPronto = true;
    console.log(setupPronto);
}
