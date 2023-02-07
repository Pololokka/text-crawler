function inicia() {
    const start = document.querySelector("[data-inicia]");
    start.addEventListener('click', () => printaTela())
}

function printaTela() {
    let generoJogo;
    nome == "" ? nome = "Astrash" : nome = nome;
    genero == "m" || genero == "M" ? generoJogo = "o" : generoJogo = "a";
    classe == undefined ? classe = "Bárbaro" : classe = classe;

    const telaPrincipal = document.createElement("div");
    telaPrincipal.innerHTML = `
        <p class="texto">${nome}, ${generoJogo} ${classe}, seja bem vind${generoJogo} ao mundo de Sveen!
    `

    principal.innerHTML = ""
    principal.appendChild(telaPrincipal);
}
