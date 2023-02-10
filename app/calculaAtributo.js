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

function atualizaBonus(){
    bonusAtk = forcaTotal;
    bonusAgi = agiTotal;
    bonusDex = dexTotal;
}
