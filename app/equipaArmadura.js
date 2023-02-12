var nomeArmadura;
var dadoDefesa = 1;
var bonusDefesa = 0;

function equiparArmadura() {
    const telaEquipamento = document.createElement("div");
    telaEquipamento.innerHTML += `
        <p class="texto">.
        <p class="texto">..O inimigo derrotado deixou:</p>
        <p class="texto">..${nomeArmaduraGerada}(${dadoDefesaGerado}+${bonusDefesaGerado})
        <p class="texto">..Gostaria de usar essa armadura?</p>
        <p class="texto link" data-equipar-armadura>..EQUIPAR</p>
    `
    principal.appendChild(telaEquipamento);

    const botaoEquipar = document.querySelectorAll("[data-equipar-armadura]")
    botaoEquipar.forEach( (elemento) => {
        elemento.addEventListener('click', () =>{
            nomeArmadura = nomeArmaduraGerada;
            dadoDefesa = dadoDefesaGerado;
            bonusDefesa = bonusDefesaGerado;
            equipamento = document.querySelector("[data-armor-equip]").innerHTML = `
            Armadura atual: ${nomeArmadura}(${dadoDefesa}+${bonusDefesa})
            `
            principal.removeChild(telaEquipamento);
        })
    })
}
