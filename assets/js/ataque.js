var danoPlayer;
var danoInimigo;
var chance;

function atacar(btnAtaque) {
    btnAtaque = document.querySelector("[data-ataque]")
     btnAtaque.addEventListener('click', () => {
        if(setupPronto && !playerMorto) {
            ataquePlayer();
            new Audio("../assets/audio/ataque.mp3").play();
            
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
    chance = Math.floor(Math.random() * 21) + Math.floor(dexTotal) + bonusArmaAcerto
    if(chance >= 8 + agiInimigo){
        danoPlayer = Math.ceil(Math.random() * dadoAtaquePlayer) + bonusAtk + bonusArmaDano;
        if(danoPlayer <= 0)
            danoPlayer = 0;
        
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
    calcArmadura = Math.floor(Math.random() * dadoDefesa) + bonusDefesa;
    console.log(calcArmadura)
    if(chance >= 8 + agiTotal){
        danoInimigo = Math.ceil(Math.random() * dadoAtaqueInimigo) + forcaInimigo - calcArmadura;
        if(danoInimigo <= 0)
            danoInimigo = 1;

        vidaAtual -= danoInimigo;
        if(vidaAtual < vidaTotal/4 && vidaAtual > 0)
            new Audio("../assets/audio/vida_baixa.mp3").play();
        
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

atacar();
