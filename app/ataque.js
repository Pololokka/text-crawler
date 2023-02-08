var danoPlayer;
var danoInimigo;

function atacar(btnAtaque) {
    btnAtaque = document.querySelector("[data-ataque]")
    btnAtaque.addEventListener('click', () => {
        if(setupPronto) {
            ataquePlayer();
            ataqueInimigo();
        }
    })
}

function ataquePlayer() {
    danoPlayer = Math.floor(Math.random() * 11);

    const telaDanoPlayer = document.createElement("div");
    telaDanoPlayer.innerHTML += `
        <p class="texto">.</p>
        <p class="texto">..${nome}, ataca! Causa ${danoPlayer} de dano!
    `
    principal.appendChild(telaDanoPlayer);
}

function ataqueInimigo() {
    danoInimigo = Math.floor(Math.random() * 10);

    const telaDanoInimigo = document.createElement("div");
    telaDanoInimigo.innerHTML += `
        <p class="texto">..Dummy, ataca! Causa ${danoInimigo} de dano!
    `
    principal.appendChild(telaDanoInimigo);
}

atacar();