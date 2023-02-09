const bonusMaior = 2;
const bonusMenor = 1;

var forcaTotal = 1;
var dexTotal = 1;
var consTotal = 1;
var agiTotal = 1; 

function atualizaAtributo() {
    forca = document.querySelector("[data-forca]").innerHTML = `
        Força: ${forcaTotal}
    `
    destreza = document.querySelector("[data-destreza]").innerHTML = `
        Destreza: ${dexTotal}
    `
    constituicao = document.querySelector("[data-constituicao]").innerHTML = `
        Constituição: ${consTotal}
    `
    agilidade = document.querySelector("[data-agilidade]").innerHTML = `
        Agilidade: ${agiTotal}
    `
}

function calculoInicial(){
    switch(classe) {
        case "Guerreiro":
        case "Guerreira":
            forcaTotal += bonusMenor;
            consTotal += bonusMenor;
            break;
        case "Ladino":
        case "Ladina":
            agiTotal += bonusMaior;
            break;
        case "Assassino":
        case "Assassina":
            dexTotal += bonusMenor;
            agiTotal += bonusMenor;
            break;
        default:
            forcaTotal += bonusMaior;
    }
}

