function pegaNome(nomeInput) {
    nomeInput = document.querySelector("[data-nome]");    
    nomeInput.addEventListener('blur', () => {
        nomeSelec = document.querySelector("[data-nome]").value;
        nomeSelec == "" ? console.log("Astrash") : console.log(nomeSelec);
        return nomeSelec;
    })
}

function pegaGenero(generoInput) {
    generoInput = document.querySelector("[data-genero]");
    generoInput.addEventListener('blur', () => {
        generoSelec = document.querySelector("[data-genero]").value;
        generoSelec == "m" || generoSelec == "M" ? console.log("masculino") : console.log("feminino");
        return generoSelec; 
    })
}

function pegaClasse(classeInput) {
    classeInput = document.querySelectorAll("[data-classe]");
    classeInput.forEach(elemento => elemento.addEventListener('click', classeSelec => {
        console.log(classeSelec.target.value);
        return classeSelec.target.value;
    }))
}

function teste() {
    var x = pegaNome();
    var y = pegaGenero();
    var z = pegaClasse();

    console.log(x);
    console.log(y);
    console.log(z);
}

export const pegaInfo = {
    pegaNome,
    pegaGenero,
    pegaClasse
}

// pegaNome();
// pegaGenero();
// pegaClasse();
