var danoPlayer;
var danoInimigo;
var chance;

function atacar(btnAtaque) {
    btnAtaque = document.querySelector("[data-ataque]")
     btnAtaque.addEventListener('click', () => {
        if(setupPronto && !playerMorto) {
            ataquePlayer();
            
            if(vidaAtualInimigo > 0)
                ataqueInimigo();
            else
                morteInimigo();
            
            if(vidaAtual <= 0)
                chamaMorte();
        }
    })
}

function ataquePlayer() {
    chance = Math.floor(Math.random() * 21) + Math.floor(dexTotal/2)
    if(chance >= 8 + agiInimigo){
        danoPlayer = Math.ceil(Math.random() * 10) + bonusAtk;
        vidaAtualInimigo -= danoPlayer;

        const telaDanoPlayer = document.createElement("div");
        telaDanoPlayer.innerHTML += `
            <p class="texto">.</p>
            <p class="texto">..${nome}, ataca! Causa ${danoPlayer} de dano!
        `
        principal.appendChild(telaDanoPlayer);
    }
    else {
        const telaDanoPlayer = document.createElement("div");
        telaDanoPlayer.innerHTML += `
            <p class="texto">.</p>
            <p class="texto">..${nome}, ataca! mas erra...
        `
        principal.appendChild(telaDanoPlayer);
    }
}

function ataqueInimigo() {
    chance = Math.floor(Math.random() * 21) + Math.floor(dexInimigo/2)
    if(chance >= 8 + agiTotal){
        danoInimigo = Math.ceil(Math.random() * 9) + forcaInimigo;
        vidaAtual -= danoInimigo;
        calculaVida();

        const telaDanoInimigo = document.createElement("div");
        telaDanoInimigo.innerHTML += `
            <p class="texto">..${nomeInimigo}(${vidaAtualInimigo}/${vidaTotalInimigo}), ataca! Causa ${danoInimigo} de dano!
        `
        principal.appendChild(telaDanoInimigo);
    }
    else {
        const telaDanoInimigo = document.createElement("div");
        telaDanoInimigo.innerHTML += `
            <p class="texto">..${nomeInimigo}(${vidaAtualInimigo}/${vidaTotalInimigo}), ataca! Mas erra!
        `
        principal.appendChild(telaDanoInimigo);
    }
    
}

//verificar no ataque do player se ele tá morto. verificar no ataque do inimigo se o player morreu depois do ataque

atacar();