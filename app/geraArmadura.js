var nomeArmaduraGerada;
var dadoDefesaGerado;
var bonusDefesaGerado;

function geradorArmadura(){
    var dadoGeraArmadura = Math.floor(Math.random() * 41);

    if(dadoGeraArmadura <= 6){
        nomeArmaduraGerada = "Couro";
        dadoDefesaGerado = 8;
        bonusDefesaGerado = -1;
    }
    else if(dadoGeraArmadura > 6 && dadoGeraArmadura <= 12){
        nomeArmaduraGerada = "Acolchoada";
        dadoDefesaGerado = 7;
        bonusDefesaGerado = 0;
    }
    else if(dadoGeraArmadura > 12 && dadoGeraArmadura <= 18){
        nomeArmaduraGerada = "Couro batido";
        dadoDefesaGerado = 6;
        bonusDefesaGerado = 1;
    }
    else if(dadoGeraArmadura > 18 && dadoGeraArmadura <= 23){
        nomeArmaduraGerada = "Brigantina";
        dadoDefesaGerado = 6;
        bonusDefesaGerado = 2;
    }
    else if(dadoGeraArmadura > 23 && dadoGeraArmadura <= 27){
        nomeArmaduraGerada = "Peitoral";
        dadoDefesaGerado = 5;
        bonusDefesaGerado = 3;
    }
    else if(dadoGeraArmadura > 27 && dadoGeraArmadura <= 31){
        nomeArmaduraGerada = "Meia Armadura";
        dadoDefesaGerado = 5;
        bonusDefesaGerado = 4;
    }
    else if(dadoGeraArmadura > 31 && dadoGeraArmadura <= 34){
        nomeArmaduraGerada = "Cota de malha";
        dadoDefesaGerado = 5;
        bonusDefesaGerado = 5;
    }
    else if(dadoGeraArmadura > 34 && dadoGeraArmadura <= 37){
        nomeArmaduraGerada = "Cotão de malha";
        dadoDefesaGerado = 4;
        bonusDefesaGerado = 6;
    }
    else if(dadoGeraArmadura >37 && dadoGeraArmadura <= 39){
        nomeArmaduraGerada = "Armadura de placas";
        dadoDefesaGerado = 4;
        bonusDefesaGerado = 7;
    }
    else if(dadoGeraArmadura == 40 ){
        nomeArmaduraGerada = "Armadura anti-machado";
        dadoDefesaGerado = 4;
        bonusDefesaGerado = 9;
    }

}