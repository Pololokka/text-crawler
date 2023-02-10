var vidaAtual = 50 + consTotal*2;
var vidaTotal = 50 + consTotal*2;
var bonusAtk = forcaTotal;
var bonusAgi = agiTotal;
var bonusDex = dexTotal;
var expAtual = 0;
var expTotal = 100;
var pontoAtributo = 0;

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
    
    pontoAtributo += 1;
    pontoAtr = document.querySelector("[data-atr]").innerHTML = `
        Pontos: ${pontoAtributo}
    `
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

//devia ter feito com forEach, mas agora eu não tenho como refatorar o código

function gastaPonto() {
    forca = document.querySelector("[data-forca]");
    destreza = document.querySelector("[data-destreza]");
    constituicao = document.querySelector("[data-constituicao]");
    agilidade = document.querySelector("[data-agilidade]");

    forca.addEventListener('click', () => {
        if(pontoAtributo > 0){
            forcaTotal++;
            pontoAtributo--;
            forca = document.querySelector("[data-forca]").innerHTML = `
                Força: ${forcaTotal}
            `
            pontoAtr = document.querySelector("[data-atr]").innerHTML = `
                Pontos: ${pontoAtributo}
            `
            atualizaBonus();
            console.log(bonusAtk);
        }
    });

    destreza.addEventListener('click', () => {
        if(pontoAtributo > 0){
            dexTotal++;
            pontoAtributo--;
            destreza = document.querySelector("[data-destreza]").innerHTML = `
                Destreza: ${dexTotal}
            `
            pontoAtr = document.querySelector("[data-atr]").innerHTML = `
                Pontos: ${pontoAtributo}
            `
            atualizaBonus();
        }  
    });

    constituicao.addEventListener('click', () => {
        if(pontoAtributo > 0){
            consTotal++;
            pontoAtributo--;
            constituicao = document.querySelector("[data-constituicao]").innerHTML = `
                Constituição: ${consTotal}
            `
            pontoAtr = document.querySelector("[data-atr]").innerHTML = `
                Pontos: ${pontoAtributo}
            `
            atualizaBonus();
        } 
    });

    agilidade.addEventListener('click', () => {
        if(pontoAtributo > 0){
            agiTotal++;
            pontoAtributo--;
            agilidade = document.querySelector("[data-agilidade]").innerHTML = `
                Agilidade: ${agiTotal}
            `
            pontoAtr = document.querySelector("[data-atr]").innerHTML = `
                Pontos: ${pontoAtributo}
            `
            atualizaBonus();
        } 
    });
}

gastaPonto();
