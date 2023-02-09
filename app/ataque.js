var danoPlayer;
var danoInimigo;

function atacar(btnAtaque) {
    btnAtaque = document.querySelector("[data-ataque]")
     btnAtaque.addEventListener('click', () => {
        if(setupPronto && !playerMorto) {
            ataquePlayer();
            ataqueInimigo();
            if(vidaAtual <= 0) {
                chamaMorte();
                playerMorto = true;
            }
        }
    })
}

function ataquePlayer() {
    danoPlayer = Math.ceil(Math.random() * 10) + bonusAtk;
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

//verificar no ataque do player se ele tá morto. verificar no ataque do inimigo se o player morreu depois do ataque

atacar();