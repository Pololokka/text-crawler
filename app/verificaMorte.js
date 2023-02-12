var playerMorto = false
var inimigoMorto = false;

function chamaMorte() {
    let generoJogo;
    genero == "m" || genero == "M" ? generoJogo = "o" : generoJogo = "a";
    const telaMortePlayer = document.createElement("div");
    telaMortePlayer.innerHTML += `
        <p class="texto">.</p>
        <p class="texto">..${nome}, ${generoJogo} ${classe}, morreu...
        <p class="texto">..Você será lembrad${generoJogo} como outr${generoJogo} aventureir${generoJogo}</p>
        <p class="texto">..que sucumbiu nessas terras esquecidas...</p>
    `
    principal.appendChild(telaMortePlayer);
    playerMorto = true;
    new Audio("../audio/morte.mp3").play();
}

function morteInimigo(){
    var lootPocao = Math.floor(Math.random() * 3) + modPocao;
    qtaPocao += lootPocao;
    atualizaQtaPocao();
    const telaMorteInimigo = document.createElement("div");
    telaMorteInimigo.innerHTML += `
        <p class="texto">.
        <p class="texto">..${nomeInimigo} morreu!</p>
        <p class="texto">..${nomeInimigo} deixa ${lootPocao} poções de cura!</p>
    `
    principal.appendChild(telaMorteInimigo);
    expAtual += Math.floor(Math.random() * 10) + modExp;
    if(expAtual >= expTotal){
        atualizaLvl();
    }
    
    atualizaExp();
    geraInimigo();

    telaMorteInimigo.innerHTML += `
        <p class="texto">..Mas ${nomeInimigo} surge para te enfrentar!</p>
    `
    principal.appendChild(telaMorteInimigo);

    var lootArma = Math.floor(Math.random() * 5)
    if(lootArma == 4){
        geradorArma();
        equiparArma();
        new Audio("../audio/loot.mp3").play();
    }

    var lootArmadura = Math.floor(Math.random() * 6)
    if(lootArmadura == 5){
        geradorArmadura()
        equiparArmadura()
        new Audio("../audio/loot.mp3").play();
    }
}
