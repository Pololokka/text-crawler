var vidaTotalInimigo = 15;
var vidaAtualInimigo = vidaTotalInimigo;

var consInimigo = 1;
var forcaInimigo = 0;
var dexInimigo = 0;
var agiInimigo = 0;
var dadoAtaqueInimigo = 1;

var modExp = 100;

var nomeInimigo = "Dummy";

function geraInimigo() {
    var dadoInimigo = Math.floor(Math.random() * 20);
    
    if(dadoInimigo <= 5){
        consInimigo = 2 + nivelPlayer;
        forcaInimigo = 1 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 2 + nivelPlayer;
        dadoAtaqueInimigo = 4;
        vidaTotalInimigo = Math.ceil(Math.random() * 8) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Goblin";
    }
    else if(dadoInimigo > 5 && dadoInimigo <= 10){
        consInimigo = 1 + nivelPlayer;
        forcaInimigo = 2 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 2 + nivelPlayer;
        dadoAtaqueInimigo = 4;
        vidaTotalInimigo = Math.ceil(Math.random() * 8) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Lobo";
    }
    else if(dadoInimigo > 10 && dadoInimigo <= 15){
        consInimigo = 1 + nivelPlayer;
        forcaInimigo = 1 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 2 + nivelPlayer;
        modExp = 2 + nivelPlayer;
        dadoAtaqueInimigo = 4;
        vidaTotalInimigo = Math.ceil(Math.random() * 8) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Bandido";
    }
    else if(dadoInimigo > 15 && dadoInimigo <= 20){
        consInimigo = 1 + nivelPlayer;
        forcaInimigo = 2 + nivelPlayer;
        dexInimigo = 1 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 4 + nivelPlayer;
        dadoAtaqueInimigo = 6;
        vidaTotalInimigo = Math.ceil(Math.random() * 8) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Orc";
    }
    else if(dadoInimigo > 20 && dadoInimigo <= 23){
        consInimigo = 3 + nivelPlayer;
        forcaInimigo = 1 + nivelPlayer;
        dexInimigo = 1 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 4 + nivelPlayer;
        dadoAtaqueInimigo = 4;
        vidaTotalInimigo = Math.ceil(Math.random() * 12) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Troll";
    }
    else if(dadoInimigo > 23 && dadoInimigo <= 26){
        consInimigo = 2 + nivelPlayer;
        forcaInimigo = 2 + nivelPlayer;
        dexInimigo = 1 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 4 + nivelPlayer;
        dadoAtaqueInimigo = 6;
        vidaTotalInimigo = Math.ceil(Math.random() * 12) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Bugbear";
    }
    else if(dadoInimigo > 26 && dadoInimigo <= 29){
        consInimigo = 2 + nivelPlayer;
        forcaInimigo = 2 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 4 + nivelPlayer;
        dadoAtaqueInimigo = 6;
        vidaTotalInimigo = Math.ceil(Math.random() * 8) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Corujurso";
    }
    else if(dadoInimigo > 29 && dadoInimigo <= 31){
        consInimigo = 4 + nivelPlayer;
        forcaInimigo = 2 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 2 + nivelPlayer;
        modExp = 6 + nivelPlayer;
        dadoAtaqueInimigo = 6;
        vidaTotalInimigo = Math.ceil(Math.random() * 16) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Golem";
    }
    else if(dadoInimigo > 31 && dadoInimigo <= 33){
        consInimigo = 2 + nivelPlayer;
        forcaInimigo = 4 + nivelPlayer;
        dexInimigo = 1 + nivelPlayer;
        agiInimigo = 1 + nivelPlayer;
        modExp = 6 + nivelPlayer;
        dadoAtaqueInimigo = 8;
        vidaTotalInimigo = Math.ceil(Math.random() * 16) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Ghoul";
    }
    else if(dadoInimigo > 33 && dadoInimigo <= 35){
        consInimigo = 1 + nivelPlayer;
        forcaInimigo = 4 + nivelPlayer;
        dexInimigo = 3 + nivelPlayer;
        agiInimigo = 2 + nivelPlayer;
        modExp = 8 + nivelPlayer;
        dadoAtaqueInimigo = 6;
        vidaTotalInimigo = Math.ceil(Math.random() * 12) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Lobo Gigante";
    }
    else if(dadoInimigo == 36){
        consInimigo = 1 + nivelPlayer;
        forcaInimigo = 6 + nivelPlayer;
        dexInimigo = 2 + nivelPlayer;
        agiInimigo = 2 + nivelPlayer;
        modExp = 10 + nivelPlayer;
        dadoAtaqueInimigo = 10;
        vidaTotalInimigo = Math.ceil(Math.random() * 12) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Lich";
    }
    else if(dadoInimigo == 37){
        consInimigo = 3 + nivelPlayer;
        forcaInimigo = 6 + nivelPlayer;
        dexInimigo = 3 + nivelPlayer;
        agiInimigo = 3 + nivelPlayer;
        modExp = 15 + nivelPlayer;
        dadoAtaqueInimigo = 10;
        vidaTotalInimigo = Math.ceil(Math.random() * 20) * consInimigo + nivelPlayer;
        vidaAtualInimigo = vidaTotalInimigo;
        nomeInimigo = "Lich";
    }

}
