const principal = document.querySelector("[data-main]");

function telaInfo() {
    principal.innerHTML = `
        <div class="nome__container">
            <label for="nome" class="texto">Insira seu nome:</label>
            <input type="text" name="nome" class="texto nome__input" maxlength="20" autofocus data-nome>
        </div>

        <div class="genero__container">
            <label for="genero" class="texto">Insira seu gênero(M/F):</label>
            <input type="text" name="genero" class="texto genero__input" maxlength="1" data-genero>
        </div>
            <input type="button" value="Avançar" class="link texto botao" data-avanco>
        </div>
    `
}

function chamaClasse() {
    const start = document.querySelector("[data-avanco]");
    start.addEventListener('click', () => telaClasse())
}

function telaClasse() {
    let generoJogo;
    genero == "m" || genero == "M" ? generoJogo = "o" : generoJogo = "a";

    principal.innerHTML = `
        <div class="classe__container">
        <p class="texto texto__classe">Clique em sua classe para escolhe-la:</p>
        <div class="classe__conteudo">
            <input type="button" value="Bárbar${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Este poderoso combatente luta sem armadura e com grandes armas. Utilizando de força bruta para destruir seus oponentes antes que eles possam reagir</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Força: 4</p>
                <p class="texto classe__atributo">Destreza: 2</p>
                <p class="texto classe__atributo">Constituição: 3</p>
                <p class="texto classe__atributo">Agilidade: 1</p>
            </div>
        </div>
        <div class="classe__conteudo">
            <input type="button" value="Guerreir${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Proficiente com diversas técnicas de combate, o guerreiro utiliza de sua expertise para vencer seus inimigos de maneira eficiente</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Força: 3</p>
                <p class="texto classe__atributo">Destreza: 1</p>
                <p class="texto classe__atributo">Constituição: 4</p>
                <p class="texto classe__atributo">Agilidade: 2</p>
            </div>
        </div>
        <div class="classe__conteudo">
            <input type="button" value="Ladin${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Um habitante das sombras, o ladino chega sem ser visto, e ataca utilizando de suas habilidades furtivas</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Força: 2</p>
                <p class="texto classe__atributo">Destreza: 3</p>
                <p class="texto classe__atributo">Constituição: 1</p>
                <p class="texto classe__atributo">Agilidade: 4</p>
            </div>
        </div>

        </div>
            <input type="button" value="Iniciar" class="link texto botao" data-inicia>
        </div>
    `

    inicia();
}

telaInfo();
chamaClasse();
