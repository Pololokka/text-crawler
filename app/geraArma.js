var dadoAtaqueGerado;
var bonusDanoGerado;
var bonusAcertoGerado;
var nomeArmaGerada;
var nomeQualidadeGerado;

function geradorArma(){
    var dadoGeraArma = Math.floor(Math.random() * 21);

    if(dadoGeraArma <= 5){
        nomeArmaGerada = "Adaga";
        dadoAtaqueGerado = 5;
        bonusAcertoGerado = 3;
    }
    else if(dadoGeraArma > 5 && dadoGeraArma <= 10){
        nomeArmaGerada = "Espada Curta";
        dadoAtaqueGerado = 6;
        bonusAcertoGerado = 2;
    }
    else if(dadoGeraArma > 10 && dadoGeraArma <= 14){
        nomeArmaGerada = "Rapieira";
        dadoAtaqueGerado = 7;
        bonusAcertoGerado = 1;
    }
    else if(dadoGeraArma > 14 && dadoGeraArma <= 17){
        nomeArmaGerada = "Espada Longa";
        dadoAtaqueGerado = 8;
        bonusAcertoGerado = 0;
    }
    else if(dadoGeraArma > 17 && dadoGeraArma <= 19){
        nomeArmaGerada = "Maça de Guerra";
        dadoAtaqueGerado = 9;
        bonusAcertoGerado = 0;
    }
    else if(dadoGeraArma == 20){
        nomeArmaGerada = "Machadinha";
        dadoAtaqueGerado = 10;
        bonusAcertoGerado = 1;
    }

    var dadoGeraQualidade = Math.floor(Math.random() * 21);

    if(dadoGeraQualidade <= 5){
        nomeQualidadeGerado = "enferrujada";
        bonusDanoGerado = -1;
    }
    else if(dadoGeraQualidade > 5 && dadoGeraQualidade <= 10){
        nomeQualidadeGerado = "velha";
        bonusDanoGera;
    }
    else if(dadoGeraQualidade > 10 && dadoGeraQualidade <= 14){
        nomeQualidadeGerado = "usada";
        bonusDanoGerado = 1;
    }
    else if(dadoGeraQualidade > 14 && dadoGeraQualidade <= 17){
        nomeQualidadeGerado = "nova";
        bonusDanoGerado = 2;
    }
    else if(dadoGeraQualidade > 17 && dadoGeraQualidade <= 19){
        nomeQualidadeGerado = "brilhante";
        bonusDanoGerado = 3;
    }
    else if(dadoGeraQualidade == 20 && nomeArmaGerada == "Machadinha"){
        nomeQualidadeGerado = "machado";
        bonusDanoGerado = 5;
    }
}