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
    danoPlayer = Math.ceil(Math.random() * 10) + bonusAtk;
    console.log(bonusAtk)
    vidaAtualInimigo -= danoPlayer;

    const telaDanoPlayer = document.createElement("div");
    telaDanoPlayer.innerHTML += `
        <p class="texto">.</p>
        <p class="texto">..${nome}, ataca! Causa ${danoPlayer} de dano!
    `
    principal.appendChild(telaDanoPlayer);
}

function ataqueInimigo() {
    danoInimigo = Math.ceil(Math.random() * 9);
    vidaAtual -= danoInimigo;
    calculaVida();

    const telaDanoInimigo = document.createElement("div");
    telaDanoInimigo.innerHTML += `
        <p class="texto">..Dummy(${vidaAtualInimigo}/${vidaTotalInimigo}), ataca! Causa ${danoInimigo} de dano!
    `
    principal.appendChild(telaDanoInimigo);
}

atacar();