var nome = pegaNome();
var genero = pegaGenero();
var classe = pegaClasse();

function pegaNome(nomeInput) {
    nomeInput = document.querySelector("[data-nome]");    
    nomeInput.addEventListener('blur', () => {
        nomeSelec = document.querySelector("[data-nome]").value;
        nome = nomeSelec;
    })
}

function pegaGenero(generoInput) {
    generoInput = document.querySelector("[data-genero]");
    generoInput.addEventListener('blur', () => {
        generoSelec = document.querySelector("[data-genero]").value;
        generoSelec == "m" || generoSelec == "M" ? console.log("masculino") : console.log("feminino");
        genero = generoSelec; 
    })
}

function pegaClasse(classeInput) {
    classeInput = document.querySelectorAll("[data-classe]");
    classeInput.forEach(elemento => elemento.addEventListener('click', classeSelec => {
        console.log(classeSelec.target.value);
        classe = classeSelec.target.value;
    }))
}
