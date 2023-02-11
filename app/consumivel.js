var qtaPocao = 5;

function atualizaQtaPocao() {
    forca = document.querySelector("[data-pocao-qta]").innerHTML = `
        Quantidade de poções: ${qtaPocao}
    `
}

function tomaPocao() {
    const tomarPocao = document.querySelector("[data-pocao]");
    tomarPocao.addEventListener('click', () => {
        if(setupPronto && !playerMorto){
            if(vidaAtual < vidaTotal && qtaPocao > 0){
                qtaPocao -= 1;
                new Audio("../audio/poção.mp3").play();
                vidaAtual += Math.ceil(Math.random() * 6) *2;
                if(vidaAtual > vidaTotal)
                    vidaAtual = vidaTotal; 
                calculaVida();
                atualizaQtaPocao();
            }
            else {
                const telaPocao = document.createElement("div");
                telaPocao.innerHTML += `
                    <p class="texto">.
                    <p class="texto">..Você não pode mais tomar poções!</p>
                `
                principal.appendChild(telaPocao);
            }
        }
    })  
}

tomaPocao();
