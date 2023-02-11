var dadoAtaquePlayer = 4;
var bonusArmaDano = 0;
var bonusArmaAcerto = 0;
var nomeArma = "Mãos";
var nomeQualidade;

function equiparArma() {
    const telaEquipamento = document.createElement("div");
    telaEquipamento.innerHTML += `
        <p class="texto">.
        <p class="texto">..O inimigo derrotado deixou:</p>
        <p class="texto">..${nomeArmaGerada} ${nomeQualidadeGerado}(1d${dadoAtaqueGerado} + ${bonusDanoGerado})
        <p class="texto">..Gostaria de usar essa arma?</p>
        <p class="texto link" data-equipar>..EQUIPAR</p>
    `
    principal.appendChild(telaEquipamento);

    const botaoEquipar = document.querySelectorAll("[data-equipar]")
    botaoEquipar.forEach( (elemento) => {
        elemento.addEventListener('click', () =>{
            dadoAtaquePlayer = dadoAtaqueGerado;
            bonusArmaDano = bonusDanoGerado;
            bonusArmaAcerto = bonusAcertoGerado;
            nomeArma = nomeArmaGerada;
            nomeQualidade = nomeQualidadeGerado;
            equipamento = document.querySelector("[data-arma-equip]").innerHTML = `
                Arma atual: ${nomeArmaGerada} ${nomeQualidadeGerado}(1d${dadoAtaqueGerado} + ${bonusDanoGerado})
            `
            principal.removeChild(telaEquipamento);
        })
    })
}
