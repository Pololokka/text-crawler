var vidaAtual = 50 + consTotal*2;
var vidaTotal = 50 + consTotal*2;
var bonusAtk = forcaTotal;
var bonusAgi = agiTotal;
var bonusDex = dexTotal;

function calculaVida(){
    vida = document.querySelector("[data-vida]").innerHTML = `
        HP: ${vidaAtual}/${vidaTotal}
    `
}

function atualizaBonus(){
    bonusAtk = forcaTotal;
    bonusAgi = agiTotal;
    bonusDex = dexTotal;
}
