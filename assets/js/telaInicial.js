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
        <p class="texto">Explicação dos atributos:</p>
        <p class="texto">.</p>
        <p class="texto">FORÇA: aumenta o dano causado</p>
        <p class="texto">DESTREZA: aumenta a chance de esquiva</p>
        <p class="texto">CONSTITUIÇÃO: aumenta a vida máxima</p>
        <p class="texto">AGILIDADE: aumenta a chance de acerto</p>
        <p class="texto">.</p>
        <p class="texto">Armas com dano menor são fisicamente menores também, então são </p>
        <p class="texto">mais fáceis de utilizar, e vão acertar seus inimigos mais vezes,</p>
        <p class="texto">mas com a chance de causar menos dano que armas mais brutas</p>
        <p class="texto">.</p>
        <p class="texto">Subindo de nível, você ganhará pontos que podem ser utilizados</p>
        <p class="texto">para aumentar seus atributos. Para gastar um ponto de atributo</p>
        <p class="texto">basta clicar abaixo, no atributo que deseja melhorar</p>
        <p class="texto">.</p>
        <p class="texto">Após a fala do Pescador, basta clicar em ATACAR para seguir com o jogo. </p>
        <p class="texto">Os inimigos são infinitos. Quando um morrer, outro surgirá para</p>
        <p class="texto">te desafiar</p>
        <div>
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
        <p class="texto texto__classe">Clique em sua Classe para escolhe-la, e depois clique em INICIAR:</p>
        <div class="classe__conteudo">
            <input type="button" value="Bárbar${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Este poderoso combatente luta sem armadura e com grandes armas. Utilizando de força bruta para destruir seus oponentes antes que eles possam reagir</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Força: +${bonusMaior}</p>
            </div>
        </div>
        <div class="classe__conteudo">
            <input type="button" value="Guerreir${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Proficiente com diversas técnicas de combate, o guerreiro utiliza de sua expertise para vencer seus inimigos de maneira eficiente</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Força: +${bonusMenor}</p>
                <p class="texto classe__atributo">Constituição: +${bonusMenor}</p>
            </div>
        </div>
        <div class="classe__conteudo">
            <input type="button" value="Ladin${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Um habitante das sombras, o ladino chega sem ser visto, e ataca utilizando de suas habilidades furtivas</p>
            <div class="atributos__container">
                <p class="texto classe__atributo">Agilidade: +${bonusMaior}</p>
            </div>
        </div>
        <div class="classe__conteudo">
            <input type="button" value="Assassin${generoJogo}" class="texto botao link" data-classe>
            <p class="texto classe__descricao">Um ser discreto, o assassino pode se esconder a plena vista, e dar golpes sorrateiros e eficazes, a fim de acabar com o seu alvo o mais rápido possível</p>
            <div class="atributos__container">
            <p class="texto classe__atributo">Destreza: +${bonusMenor}</p>
                <p class="texto classe__atributo">Agilidade: +${bonusMenor}</p>
            </div>
        </div>

        </div>
            <input type="button" value="Iniciar" class="link texto botao" data-inicia>
        </div>
    `
    pegaClasse();
    atualizaQtaPocao();
    inicia();
}

telaInfo();
chamaClasse();
