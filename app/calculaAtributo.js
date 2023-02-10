var vidaAtual = 50 + consTotal*2;
var vidaTotal = 50 + consTotal*2;
var bonusAtk = forcaTotal;
var bonusAgi = agiTotal;
var bonusDex = dexTotal;
var expAtual = 0;
var expTotal = 100;

function calculaVida(){
    vida = document.querySelector("[data-vida]").innerHTML = `
        HP: ${vidaAtual}/${vidaTotal}
    `
}

function atualizaExp(){
    experiência = document.querySelector("[data-exp]").innerHTML = `
        EXP: ${expAtual}/${expTotal}
    `
}

function atualizaLvl(){
    var nivelPlayer = 1;
    let generoJogo;

    genero == "m" || genero == "M" ? generoJogo = "o" : generoJogo = "a";
    nivelPlayer += 1;
    nivel = document.querySelector("[data-lvl]").innerHTML = `
        Nível ${nivelPlayer}
    `
    expAtual = 0;
    expTotal += Math.floor(10 * nivelPlayer/2);

    const telaNivel = document.createElement("div");
    telaNivel.innerHTML += `
        <p class="texto">.</p>
        <p class="texto">..${nome}, ${generoJogo} ${classe}, subiu de nível!
    `
    principal.appendChild(telaNivel);
}

function atualizaBonus(){
    bonusAtk = forcaTotal;
    bonusAgi = agiTotal;
    bonusDex = dexTotal;
}
