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
}