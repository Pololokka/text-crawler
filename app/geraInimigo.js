var vidaTotalInimigo = 15;
var vidaAtualInimigo = vidaTotalInimigo;
var consInimigo = 1;
var forcaInimigo = 0;
var dexInimigo = 0;
var agiInimigo = 0;

var nomeInimigo = "Dummy";

function geraInimigo() {
    vidaTotalInimigo += consInimigo*2;
    vidaAtualInimigo = vidaTotalInimigo;
    nomeInimigo = "Dummy";
}
