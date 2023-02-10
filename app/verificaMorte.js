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
}

function morteInimigo(){
    var lootPocao = Math.floor(Math.random() * 3)
    qtaPocao += lootPocao;
    atualizaQtaPocao();
    const telaMorteInimigo = document.createElement("div");
    telaMorteInimigo.innerHTML += `
        <p class="texto">.
        <p class="texto">..${nomeInimigo} morreu!</p>
        <p class="texto">..${nomeInimigo} deixa ${lootPocao} poções de cura!</p>
    `
    principal.appendChild(telaMorteInimigo);
    geraInimigo();

    telaMorteInimigo.innerHTML += `
        <p class="texto">..Mas ${nomeInimigo} surge para te enfrentar!</p>
    `
    principal.appendChild(telaMorteInimigo);
}
