const nomeInput = document.querySelector("[data-nome]");
const generoInput = document.querySelector("[data-genero]");
const classeInput = document.querySelectorAll("[data-classe]");


function pegaNome() {    
    nomeInput.addEventListener('blur', () => {
        nomeSelec = document.querySelector("[data-nome]").value;
        nomeSelec == "" ? console.log("Inizad") : console.log(nomeSelec);
    })
}

function pegaGenero() {
    generoInput.addEventListener('blur', () => {
        generoSelec = document.querySelector("[data-genero]").value;
        console.log(generoSelec);
        generoSelec == "m" || generoSelec == "M" ? console.log("masculino") : console.log("feminino"); 
    })
}

function pegaClasse() {
    classeInput.forEach(elemento => elemento.addEventListener('click', classeSelec => {
        console.log(classeSelec.target.value);
    }))
}

pegaNome();
pegaGenero();
pegaClasse();
